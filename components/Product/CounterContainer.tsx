import React, {FC} from 'react';

type Props = {
  clickHandler:(value:number)=>void,
  currentValue:number
  title:string
}
const CounterContainer:FC<Props> = ({title,clickHandler,currentValue}) => {
  return (
      <div className='p-4 text-right'>
        <h4 className='text-lg mb-2'>{title}</h4>
        <div className="plusOrMinus w-2/3  h-12 flex gap-2  mb-4 ml-auto mr-0 ">
          <div
              onClick={() => clickHandler(-1)}
              className={`${
                  currentValue === 1 && "pointer-events-none"
              } h-full w-1/4 flex border border-gray200 justify-center text-2xl items-center cursor-pointer hover:bg-gray500 hover:text-gray100`}
          >
            -
          </div>
          <div className="h-full border border-gray400 flex-1  flex justify-center items-center pointer-events-none">
            {currentValue}
          </div>
          <div
              onClick={() => clickHandler(1)}
              className="h-full w-1/4 border border-gray200 sm:w-12 flex text-2xl  justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
          >
            +
          </div>
        </div>
      </div>

  );
};

export default CounterContainer;
