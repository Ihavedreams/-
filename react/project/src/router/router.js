import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

export default class RouterView extends React.Component {
  render() {

    //数组
    let routes = this.props.data.routes;
   
    //1:把重定向找出来
    let redirectArr = routes.filter((item) => {
      return item.redirect;
    });

    //生成重定向虚拟Dom
    let redirectDom = redirectArr.map((item, i) => {
      return <Redirect key={i} from={item.path} to={item.redirect}/>;
    });

    //2:将routes数组去掉重定向
    routes = routes.filter((item) => {
      return !item.redirect;
    });


    //3:重定向渲染出来

    return <Switch>
      {
        routes.map((item, index) => {
          return <Route
            key={index}
            path={item.path}
            render={(props) => {
              return <item.component child={item.children} props={props}/>;
            }
            }/>;
        }).concat(redirectDom)
      }
    </Switch>;
  }

}