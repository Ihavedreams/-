import React , {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
class RouterView extends Component{
    defaultProps = {
      match: {path: ''}
    }
    // => React.createElement('div',null,[])
    render(){
      /*eslint-disable react/prop-types */
      const {routes, match} = this.props;
      return <Switch>
        {
          routes.map((item,key) => {
            return <Route 
              path={match.path+item.path} 
              key={key} 
              render={({match}) => {
                const ChildRoutes = item.component;
                return <ChildRoutes math={match} routes={item.routes} />;  
              }} />;
          })
        }
      </Switch>; 
    }
}
export default RouterView;