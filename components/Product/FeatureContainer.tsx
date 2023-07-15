import React, {FC} from 'react';

type Props = {
  title: string
  features: any[]
  selectHandler: ({id,value}:{id:string,value:string}) => void
  selected: string
}

const FeatureContainer: FC<Props> = ({title, features, selectHandler, selected}) => {
  return (
      <div className='px-4 py-2'>
        <h4 className='text-lg mb-2'>{title}</h4>
        <div className='flex gap-2 flex-wrap justify-end'>
          {
            features?.map((item, index) => {
              return (
                  <div
                      key={"FEATURE_INDEX_"+index}
                      onClick={()=>selectHandler({id:item._id,value:item.weight??item.name})}
                      className={`flex items-center justify-center border py-1.5 px-3 ${
                          selected === item._id
                              ? "bg-gray500 text-gray100"
                              : "border-gray300 text-gray400"
                      } cursor-pointer`}
                      style={{minWidth:'84px'}}
                  >
                    {item.name}
                  </div>
              )
            })
          }
        </div>

      </div>
  );
};

export default FeatureContainer;
