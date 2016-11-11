import React, { Component } from 'react';
import ReactDOM  from 'react-dom'
import ReactList from 'react-list';

import Hammer from 'react-hammerjs'

import { LeftList } from  'backend/common/js/partial/left_table.js'

export const FrontPage = ({
	onClick,
	onClickToExpand,
    table
}) => {
        return (LeftList({onClick,onClickToExpand,table}))
}

