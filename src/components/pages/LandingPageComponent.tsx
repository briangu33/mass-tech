import * as React from "react";
import * as Radium from "radium";
import * as color from "color";

@Radium
export class LandingPageComponent extends React.Component<any, ILandingPageComponentState> {
    public render() {
        let cells: string[][] = [["1", "two", "three"], ["four", "5", "six"], ["seven", "eight", "9"]];

        let rows = cells.map((row: string[], rowIndex: number) => {
            let cellsList = row.map((cell: string, colIndex: number) => {
                return (
                    <div key={colIndex} style={{

                    }}>
                        <p>{cell}</p>
                    </div>
                );
            });
            return (
                <div key={rowIndex} style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                }}>
                    {cellsList}
                </div>
            );
        });

        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
            }}>
                {rows}
            </div>
        );
    }

    private static styles = {
        base: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        },
        title: {
            fontSize: "4em",
        },
        subtitle: {
            fontSize: "1.5em",
        },
        composeButton: {
            padding: "10px 5px 10px 5px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
            transition: "200ms",
            fontSize: "1.2em",
            opacity: 0.8,
            marginRight: "20px",
            ":hover": {
                fontWeight: "bold"
            },
        },
        advancedEditorButton: {
            padding: "10px 5px 10px 5px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2em",
            opacity: 0.8,
            ":hover": {
                fontWeight: "bold"
            },
        },
        stanfordButton: {
            padding: "10px 5px 10px 5px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "auto",
            fontSize: "1.2em",
            opacity: 0.8,
            ":hover": {
                fontWeight: "bold"
            },
        },
    };
}

export interface ILandingPageComponentState {
}