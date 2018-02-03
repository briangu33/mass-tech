import * as React from "react";
import * as Radium from "radium";

@Radium
export class LandingPageComponent extends React.Component<any, ILandingPageComponentState> {
    public render() {
        let cells: string[][] = Array(100).fill(Array(100).fill("sample value"));

        let rows = cells.map((row: string[], rowIndex: number) => {
            let cellsList = row.map((cell: string, colIndex: number) => {
                return (
                    <div key={colIndex} style={{
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                        minWidth: "100px",
                        height: "20px"
                    }}>
                        <p>{cell}</p>
                    </div>
                );
            });
            return (
                <div key={rowIndex} style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start"
                }}>
                    {cellsList}
                </div>
            );
        });

        return (
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start"
                }}>
                    {rows}
                </div>
                <div style={{
                    position: "fixed",
                    left: "0px",
                    bottom: "0px",
                    height: "25px",
                    width: "100%",
                    backgroundColor: "#888888",
                }}>

                </div>
            </div>
        );
    }

    private static styles = {};
}

export interface ILandingPageComponentState {
}