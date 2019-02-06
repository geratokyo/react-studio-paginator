import * as React from 'react';
export interface PaginatorProps {
    customElement: (index: number) => React.ReactNode;
    elementsPerView?: number;
    totalElements: number;
    defaultPageIdx?: number;
    showPaginatorControls?: boolean;
    className?: string;
    previousButton?: React.ReactNode;
    nextButton?: React.ReactNode;
    pageStatusComponent?: (currentPage: number, totalPages: number) => React.ReactNode;
}
export interface PaginatorState {
    showPaginatorControls: boolean;
    totalPages: number;
    currentPageIdx: number;
}
export declare class Paginator extends React.Component<PaginatorProps, PaginatorState> {
    constructor(p: PaginatorProps);
    static defaultProps: Partial<PaginatorProps>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PaginatorProps, prevState: PaginatorState): void;
    goToStart: () => void;
    goToEnd: () => void;
    calculatePages: () => void;
    showPreviousElements: () => number;
    showNextElements: () => number;
    getShownElement: () => React.ReactNode;
    render(): JSX.Element;
}
