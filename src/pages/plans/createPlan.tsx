import React, { useState } from 'react';
import Input from '../../common/components/Input'
import Checkbox from 'common/components/Checkbox';

const CreatePlan = () => {
    const [planName, setPlanName] = useState<string>('');
    const [hashtag, setHashtag] = useState<string>('');
    const changePlanName = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setPlanName(e.target.value);
    }
    const changeHashtag = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setHashtag(e.target.value);
    }

    const [checkedItems, setCheckedItems] = useState<string[]>([])
    const [isChecked, setIsChecked] = useState<boolean>(false);


    const checkedItemHandler = (id:string, isChecked:boolean) => {
        if(isChecked){
            setCheckedItems((prev)=>[...prev, id]);
            return;
        }
        if(!isChecked && checkedItems.includes(id)){
            setCheckedItems(checkedItems.filter((item)=>item !== id));
            return;
        }
        return;
    };

    const checkHandler = (e:React.ChangeEvent<HTMLInputElement>, id:string)=>{
        setIsChecked(!isChecked);
        checkedItemHandler(id, e.target.checked);
    };


    return (
        <div>
            <p>
                플랜 생성하기 페이지
            </p>
            <Input type='text' label='플랜명' value={planName} onChange={changePlanName} placeholder='플랜명을 입력하세요'/>
            <Input type='text' label='해시태그' value={hashtag} onChange={changeHashtag} placeholder='해시태그를 입력하세요'/>

            <Checkbox id='online' onChange={(e)=>checkHandler(e, 'online')} checked={checkedItems.includes('online')} label='온라인'/>
            <Checkbox id='offline' onChange={(e)=>checkHandler(e, 'offline')} checked={checkedItems.includes('offline')} label='오프라인'/>
        </div>
    )
}

export default CreatePlan;