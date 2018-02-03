import * as React from "react";
import * as Radium from "radium";

@Radium
export class AboutPageComponent extends React.Component<IAboutPageComponentProps, IAboutPageComponentState> {
    props: IAboutPageComponentProps;
    state: IAboutPageComponentState;

    constructor(props: IAboutPageComponentProps) {
        super();
    }

    public render() {
        return (
            <div>
            </div>
        );
    }

    private static styles = {
        base: {
            width: "100%"
        }
    };
}

export interface IAboutPageComponentProps {

}

export interface IAboutPageComponentState {

}