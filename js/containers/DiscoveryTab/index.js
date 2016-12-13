/**
 * Created by panguso on 2016/12/12.
 */

import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ScrollableTabBar from 'react-native-scrollable-tab-view/ScrollableTabBar';
import {Text} from 'react-native';
import TextTabPage from './TabPages/TextTabPage';
import VideoTabPage from './TabPages/VideoTabPage';
import ImageTabPage from './TabPages/ImageTabPage';

import theme from '../../constants/theme';
export default class DiscoveryFragment extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ['福利', 'Android','ios','休息视频', '扩展阅读', '前端'];
    }

    render() {
        return (
            <ScrollableTabView
                initialPage={0}
                renderTabBar={() => <ScrollableTabBar/>}
                tabBarUnderlineStyle={{backgroundColor: '#fff'}}
                tabBarBackgroundColor={theme.mainThemeColor}
                tabBarTextStyle={{color: '#fff'}}>
                <ImageTabPage tabLabel={this.tabNames[0]}/>
                <TextTabPage tabLabel={this.tabNames[1]}/>
                <TextTabPage tabLabel={this.tabNames[2]}/>
                <VideoTabPage tabLabel={this.tabNames[3]}/>
                <TextTabPage tabLabel={this.tabNames[4]}/>
                <TextTabPage tabLabel={this.tabNames[5]}/>
            </ScrollableTabView>

        );
    }

}