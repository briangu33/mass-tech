import * as React from "react";
import * as Radium from "radium";

@Radium
export class AutoComposePageComponent extends React.Component<IAutoComposePageComponentProps, IAutoComposePageComponentState> {
    private props: IAutoComposePageComponentProps;
    private state: IAutoComposePageComponentState;

    constructor(props: IAutoComposePageComponentProps) {
        super();
    }

    public render() {
        return (
            <div>

            </div>
        );
    }
}

export interface IAutoComposePageComponentProps {
}

export interface IAutoComposePageComponentState {
}