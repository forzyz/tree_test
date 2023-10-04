
import React from "react";
import { Category } from "../../Types";
import style from './line.module.scss';
import classNames from "classnames";

interface LineProps {
    id?: number;
    categories: Category[];
    isInnerComponent?: boolean;
}

export const UpperLines: React.FC<LineProps> = (props) => {
    const { id, categories, isInnerComponent } = props;

    const leftAdditionalLine = id === categories[0]?.id && (
        <div className={classNames(style.additional, style.left)}></div>
    );

    const rightAdditionalLine = id === categories[categories.length - 1]?.id && (
        <div className={classNames(style.additional, style.right)}></div>
    );

    const upperLine = isInnerComponent && (
        <div className={classNames(style.line, style.upperLine)}></div>
    );

    return (
        <>
            {leftAdditionalLine}
            {rightAdditionalLine}
            {upperLine}
        </>
    );
}

export const LowerLines: React.FC<LineProps> = (props) => {
    const { categories } = props;

    const line = !!categories.length && (
        <div className={style.line}></div>
    );

    const bigLine = categories.length > 1 && (
        <div className={style.bigLine}></div>
    );

    return (
        <>
            {line}
            {bigLine}
        </>
    );
}






