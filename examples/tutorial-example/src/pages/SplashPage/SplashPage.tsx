import * as React from 'react';
import * as ReactRedux from 'react-redux';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { IStoreState } from '../../_reducers';
import { Card } from '../../components/ui/Card/Card';
import { Paginator } from 'react-studio-paginator';
import { Button } from '../../components/ui/Button/Button';
import * as _ from 'lodash'; 

export interface SplashPageProps extends ReactRedux.DispatchProp<any> {
  className?: string;
}

const INIT_STATE: SplashPageState = {

}

export interface SplashPageState {

}


export class SplashPage extends React.Component<SplashPageProps, SplashPageState>{
  paginatorEl:Paginator;
  data = [
    {
      "key": "5c5b55582c7e100d4251c28d",
      "image": "https://picsum.photos/80/80?image=123",
      "title": "eu eu ad"
    },
    {
      "key": "5c5b55588eca1bfacc8f8419",
      "image": "https://picsum.photos/80/80?image=124",
      "title": "et pariatur aute"
    },
    {
      "key": "5c5b55586288003579f32a30",
      "image": "https://picsum.photos/80/80?image=125",
      "title": "mollit esse quis"
    },
    {
      "key": "5c5b5558cd09779e2f26dfd5",
      "image": "https://picsum.photos/80/80?image=126",
      "title": "ullamco commodo non"
    },
    {
      "key": "5c5b555802e6ea337fd84913",
      "image": "https://picsum.photos/80/80?image=127",
      "title": "est cupidatat est"
    },
    {
      "key": "5c5b55589cfd81e10a836a07",
      "image": "https://picsum.photos/80/80?image=128",
      "title": "officia veniam dolor"
    },
    {
      "key": "5c5b5558618f74c5e69c2016",
      "image": "https://picsum.photos/80/80?image=129",
      "title": "consectetur quis incididunt"
    },
    {
      "key": "5c5b55581818b3750e82ca05",
      "image": "https://picsum.photos/80/80?image=121",
      "title": "elit quis commodo"
    },
    {
      "key": "5c5b5558c14f792b410e3501",
      "image": "https://picsum.photos/80/80?image=133",
      "title": "eu qui incididunt"
    },
    {
      "key": "5c5b55582a37d362806700b4",
      "image": "https://picsum.photos/80/80?image=143",
      "title": "tempor qui dolor"
    },
    {
      "key": "5c5b555839f8163cf9bbc396",
      "image": "https://picsum.photos/80/80?image=113",
      "title": "incididunt nostrud proident"
    },
    {
      "key": "5c5b5558a79fba229e64ea90",
      "image": "https://picsum.photos/80/80?image=112",
      "title": "deserunt sint culpa"
    },
    {
      "key": "5c5b55581810616000dbf5ad",
      "image": "https://picsum.photos/80/80?image=111",
      "title": "consequat aliquip nostrud"
    }
  ]
  constructor(props: SplashPageProps) {
    super(props);
    this.state = INIT_STATE;
  }

  render() {
    let cls = this.props.className || "";
    return (
      <div className={"splash-page " + cls}>
        <Paginator
          ref={e => this.paginatorEl =e}
          elementsPerView={5}
          // Changes the number of the visible elemnts
          
          // Changes the display html for the previous button
          previousButton={<Button>Prev</Button>}
          
          // Changes the display html for the next button
          nextButton={<Button>Next</Button>}

          pageStatusComponent={(currentPage, totalPages)=>{
            return <>
              {
                _.range(0, totalPages).map((e)=>{
                  return <a onClick={
                    ()=>{
                      this.paginatorEl.setIndex(e);
                    }}
                    style={{margin:"1rem"}}
                  >
                    {e + 1}
                  </a>
                })
              }
            </>
          }}
          totalElements={this.data.length}
          customElement={(idx) => {
            let item = this.data[idx];
            return <Card 
              key={item.key}
              title={item.title}
              image={item.image}
            />
          }}
        />
      </div>
    )
  }
}




const mapStateToProps = (state: IStoreState, ownProps): Partial<SplashPageProps> => {
  return {
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage);


/**
  render() {
    let cls = this.props.className || "";
    return (
      <div className={"splash-page " + cls}>
        <Paginator
          totalElements={this.data.length}
          customElement={(idx) => {
            let item = this.data[idx];
            return <Card 
              key={item.key}
              title={item.title}
              image={item.image}
            />
          }}
        />
      </div>
    )
  }
 */