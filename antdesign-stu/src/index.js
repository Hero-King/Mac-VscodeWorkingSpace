import React from 'react';
import ReactDOM from 'react-dom';
import Formstu from './components/formstu'
import WrappedDynamicFieldSet from './components/formstu2'
import CollectionsPage from './components/formstu1' //点击按钮调出modal
import NewTable from './components/newtable'
ReactDOM.render(
    <React.Fragment>
        <Formstu></Formstu>
        <CollectionsPage />
        <WrappedDynamicFieldSet></WrappedDynamicFieldSet>

        <NewTable></NewTable>
    </React.Fragment>
    , document.getElementById('root'));


