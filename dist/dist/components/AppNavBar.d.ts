/// <reference types="react" />
import * as React from 'react';
export interface viewState {
    visible: boolean;
    selected: string;
}
export declare class AppNavBar extends React.Component<any, any> {
    state: viewState;
    onSelect(opt: any): void;
    handleVisibleChange(visible: any): void;
    render(): JSX.Element;
}
