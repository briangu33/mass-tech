import {IDataLayer} from "./IDataLayer";
import * as sqlite3 from "sqlite3";
import {RunResult} from "sqlite3";
import * as path from "path";
import {rootPath} from "./Env";
import * as fs from "fs";

const util = require("util");
const exec = require("child_process").exec;

export class SQLiteDataLayer implements IDataLayer {
    private static instancePromise: Promise<SQLiteDataLayer> = null;
    private db: sqlite3.Database;

    private constructor() {
        this.makeDirIfNotExists(path.join(rootPath, "data"));
        this.makeDirIfNotExists(path.join(rootPath, "data", "db"));
        sqlite3.verbose();
        const dbPath = path.join(rootPath, "data", "db", "prod_db");
        this.db = new sqlite3.Database(dbPath);
    }

    private makeDirIfNotExists(path: string) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }

    execRunWithPromise(query: string, params: any[] = []): Promise<RunResult> {
        return new Promise<RunResult>((resolve, reject) => {
            this.db.run(query, params, (err, result) => {
                return (err ? reject(err) : resolve(result));
            });
        });
    }

    execGetWithPromise(query: string, params: any[] = []): Promise<RunResult> {
        return new Promise<RunResult>((resolve, reject) => {
            this.db.get(query, params, (err, result) => {
                return (err ? reject(err) : resolve(result));
            });
        });
    }

    execAllWithPromise(query: string, params: any[] = []): Promise<RunResult[]> {
        return new Promise<RunResult[]>((resolve, reject) => {
            this.db.all(query, params, (err, result) => {
                return (err ? reject(err) : resolve(result));
            });
        });
    }

    execCommandWithPromise(command: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            exec(command, {maxBuffer: 1024 * 1024}, (err, stdout, stderr) => {
                if (err) {
                    return reject(err);
                }
                return resolve(stdout);
            });
        });
    }

    createTables(): Promise<void> {
        return this.execRunWithPromise(
            "CREATE TABLE IF NOT EXISTS compositions " +
            "(edit_token VARCHAR(100), " +
            "view_token VARCHAR(100), " +
            "name VARCHAR(100), " +
            "youtube_id VARCHAR(100), " +
            "recording_youtube_start DOUBLE, " +
            "recording_youtube_end DOUBLE, " +
            "start_recording_time BIGINT, " +
            "last_edited BIGINT, " +
            "view_count INT, " +
            "pitch_shift INT, " +
            "has_recorded BIT, " +
            "auto_recorded BIT, " +
            "video_duration DOUBLE, " +
            "PRIMARY KEY (edit_token), " +
            "UNIQUE (view_token)) ")
            .then(() => {
                return this.execRunWithPromise(
                    "CREATE TABLE IF NOT EXISTS compositions_notes_map " +
                    "(composition_edit_token INT, " +
                    "note_id INT, " +
                    "start INT, " +
                    "end INT)");
            })
            .then(() => {
            });
    }
}

export enum TimeInterval {
    Day = "day",
    Week = "week",
    Month = "month",
    AllTime = "all_time",
}

export function timeIntervalToMillis(timeInterval: TimeInterval): number {
    switch (timeInterval) {
        case "day": {
            return 1000 * 60 * 60 * 24;
        }
        case "week": {
            return 1000 * 60 * 60 * 24 * 7;
        }
        case "month": {
            return 1000 * 60 * 60 * 24 * 31;
        }
        case "all_time": {
            return 1000 * 60 * 60 * 24 * 365 * 30;
        }
        default: {
            return 0;
        }
    }
}
