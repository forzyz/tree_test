import { useState } from 'react';
import penSvg from '../../../../assets/pen.svg';
import checkSvg from '../../../../assets/check.svg';
import { Input } from '../../../UI/Input';
import { LowerLines } from '../Lines';
import { CategoryCaseProps, DefaultCategoryProps, EditableCategoryProps } from '../../Types';
import { Button } from '../../../UI/Button';
import style from './categoryCase.module.scss';

const DefaultCategory: React.FC<DefaultCategoryProps> = (props) => {
  const {
    id,
    color,
    value,
    isInnerComponent,
    addCategory,
    deleteCategory,
    setIsCurrentEditing,
  } = props;

  return (
    <>
      <div className={style.name} style={{ background: color }}>
        {value}
      </div>

      <Button
        type='tertiary'
        onClick={addCategory}
      >
        +
      </Button>
      {isInnerComponent && (
        <>
          <Button
            type='tertiary'
            classNames='cross'
            onClick={() => deleteCategory(id as number)}
          >
            +
          </Button>
          <Button
            type='tertiary'
            classNames='edit'
            icon={penSvg}
            onClick={() => setIsCurrentEditing!(true)}
          />
        </>
      )}
    </>
  );
};

const EditableCategory: React.FC<EditableCategoryProps> = (props) => {
  const {
    id,
    isInnerComponent,
    inputValue,
    setInputValue,
    deleteCategory,
    saveCategory,
  } = props;

  return (
    <>
      <div className={style.name} style={{ background: 'white' }}>
        <Input
          value={inputValue}
          onChange={(value) => {
            setInputValue(value);
          }}
        />
      </div>
      {isInnerComponent && (
        <>
          <Button
            type='tertiary'
            classNames='cross'
            onClick={() => deleteCategory(id as number)}
          >
            +
          </Button>
          <Button
            type='tertiary'
            classNames='check'
            icon={checkSvg}
            onClick={() => {
              saveCategory(inputValue || 'Sub-category', id);
            }}
          />
        </>
      )}
    </>
  );
};

const CategoryCase: React.FC<CategoryCaseProps> = (props) => {
  const {
    id,
    categories,
    isInnerComponent,
    value,
    color,
    addCategory,
    deleteCategory,
    isCurrentEditing,
    setIsCurrentEditing,
    saveCategory,
  } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <div className={style.category}>
      {isCurrentEditing ? (
        <EditableCategory
          id={id}
          isInnerComponent={isInnerComponent}
          inputValue={inputValue}
          setInputValue={setInputValue}
          deleteCategory={deleteCategory}
          saveCategory={saveCategory}
        />
      ) : (
        <DefaultCategory
          id={id}
          color={color}
          value={value}
          isInnerComponent={isInnerComponent}
          addCategory={addCategory}
          deleteCategory={deleteCategory}
          setIsCurrentEditing={setIsCurrentEditing}
        />
      )}

      <LowerLines
        categories={categories}
      />
    </div>
  );
};

export default CategoryCase;
