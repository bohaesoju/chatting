import * as React from 'react';
import { ChattingRoom } from '../components'
import { useDispatch, useSelector } from "react-redux";
import { ADDFILELIST_REQUEST } from "../reducers/AddfileList";

export const ViewPage = () => {


    return (
        <div className="ViewPage">
            <ChattingRoom />
        </div>
    )
};
