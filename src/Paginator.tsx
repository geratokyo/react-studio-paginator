import * as React from 'react'
import * as _ from 'lodash';


export interface PaginatorProps {

    /**
     * This is a method that will be called to retrieve a single item of the paginator.
     * @param {number} index 
     */
    customElement: (index: number) => React.ReactNode;

    /**
     * The number of elements to be shown in one page
     */
    elementsPerView?: number;

    /**
     * Total number of elements to be shown in different pages
     */
    totalElements: number;

    /**
     * This can be set if you need to start the page from a different index
     */
    defaultPageIdx?: number;

    /**
     * True if it should show the controls and the page numbers
     */
    showPaginatorControls?: boolean;

    /**
     * Parent element class name
     */
    className?: string;

    /**
     * Component for the previous button
     */
    previousButton?: React.ReactNode;

    /**
     * Component for the next button
     */
    nextButton?: React.ReactNode;

    /**
     * This is a function to show the current page status
     * @param {number} currentPage
     * @param {number} totalPages
     * @returns {React.ReactNode}
     */
    pageStatusComponent?: (currentPage: number, totalPages: number) => React.ReactNode;
}

export interface PaginatorState {

    /**
     * True if it should show the controls and the page numbers
     */
    showPaginatorControls: boolean;

    /**
     * Total number of pages
     */
    totalPages: number;

    /**
     * Current page index
     */
    currentPageIdx: number;
}

export class Paginator extends React.Component<PaginatorProps, PaginatorState>{
    constructor(p: PaginatorProps) {
        super(p);
        this.state = {
            showPaginatorControls: this.props.showPaginatorControls,
            totalPages: 0,
            currentPageIdx: 0
        }
    }

    public static defaultProps: Partial<PaginatorProps> = {
        className: "",
        showPaginatorControls: true,
        elementsPerView: 10,
        previousButton: (<button>Previous</button>),
        nextButton: (<button>Next</button>),
        pageStatusComponent: (e, i) => {
            return `${e} of ${i}`
        }
    }


    componentDidMount() {
        this.calculatePages();
    }

    componentDidUpdate(prevProps: PaginatorProps, prevState: PaginatorState) {
        if (prevProps.totalElements !== this.props.totalElements) {
            this.calculatePages();
        }
    }

    setIndex = (index) => {
        this.setState({
            currentPageIdx: index
        })
    }

    goToStart = () => {
        this.setState({
            currentPageIdx: 0
        })
    }

    goToEnd = () => {
        this.setState({
            currentPageIdx: this.state.totalPages - 1
        })
    }

    calculatePages = () => {
        this.setState({
            totalPages: Math.ceil(this.props.totalElements / this.props.elementsPerView),
            currentPageIdx: this.props.defaultPageIdx || 0
        })
    }

    showPreviousElements = () => {
        let temp = this.state.currentPageIdx - 1;
        if (temp < 0) {
            temp = 0;
        }

        this.setState({ currentPageIdx: temp })
        return temp;
    }

    showNextElements = () => {
        let temp = this.state.currentPageIdx + 1;
        if (temp > this.state.totalPages - 1) {
            temp = this.state.totalPages - 1;
        }

        this.setState({ currentPageIdx: temp })
        return temp
    }

    getShownElement = (): React.ReactNode => {
        return _.range((this.state.currentPageIdx * this.props.elementsPerView), (this.state.currentPageIdx * this.props.elementsPerView) + this.props.elementsPerView).map((e) => {
            return e < this.props.totalElements && this.props.customElement(e);
        })
    }

    render() {
        let props = this.props,
            state = this.state;
        return (
            <div className={"paginator " + props.className}>
                {
                    this.getShownElement()
                }
                {
                    this.state.showPaginatorControls &&
                    <div className="paginator__controls">
                        <div className="paginator__buttons">
                            <span className="paginator__btn paginator__btn--prev"
                                onClick={this.showPreviousElements}>
                                {props.previousButton}
                            </span>
                            <span className="paginator__status">
                                {
                                    props.pageStatusComponent(state.currentPageIdx + 1, state.totalPages)
                                }
                            </span>
                            <span className="paginator__btn paginator__btn--next"
                                onClick={this.showNextElements}>

                                {props.nextButton}
                            </span>
                        </div>
                    </div>
                }
            </div>
        )
    }
}