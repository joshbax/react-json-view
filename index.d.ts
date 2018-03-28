import * as React from 'react';

interface CopyEvent {
    name: string;
    src: any;
    namespace: string[];
}

interface CollapseEvent extends CopyEvent {
    type: "array" | "object";
}

interface ModifyEvent {
    updated_src: any; //new src value
    name: string; //new var name
    namespace: string[]; //list, namespace indicating var location
    new_value: any; //new variable value
    existing_value: any; //existing variable value
}

type CollapseCallback = (field: CopyEvent) => void;
type CopyCallback = (copy: CopyEvent) => void;
type onModifyCallback = (data: ModifyEvent) => boolean;
type onSelectCallback = (select: any) => void;

export interface ReactJsonProps {
    src: any;
    name?: string | false | null;
    theme?: "rjv-default" | string;
    collapsed?: boolean | number;
    collapseStringsAfterLength?: number | false;
    shouldCollapse?: CollapseCallback | false;
    groupArraysAfterLength?: number;
    indentWidth?: number;
    enableClipboard?: boolean | CopyCallback;
    displayObjectSize?: boolean;
    displayDataTypes?: boolean;
    onEdit?: boolean | onModifyCallback;
    onDelete?: boolean | onModifyCallback;
    onAdd?: boolean | onModifyCallback;
    onSelect?: boolean | onSelectCallback;
    iconStyle?: "circle" | "triangle" | "square";
    style?: any;
    validationMessage?: string;
}

declare class ReactJson extends React.Component<ReactJsonProps> {
    constructor(props: ReactJsonProps);
}

export default ReactJson;
