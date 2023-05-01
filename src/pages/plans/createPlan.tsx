import React, { useState } from 'react';
import Input from '../../common/components/Input'

const CreatePlan = () => {
    const [planName, setPlanName] = useState<string>('');
    const [hashtag, setHashtag] = useState<string>('');
    const changePlanName = (event : React.ChangeEvent<HTMLInputElement>)=>{
        setPlanName(event.target.value);
    }
    const changeHashtag = (event : React.ChangeEvent<HTMLInputElement>)=>{
        setHashtag(event.target.value);
    }
    return (
        <div>
            <p>
                플랜 생성하기 페이지
            </p>
            <Input type='text' label='플랜명' value={planName} onChange={changePlanName} placeholder='플랜명을 입력하세요'/>
            <Input type='text' label='해시태그' value={hashtag} onChange={changeHashtag} placeholder='해시태그를 입력하세요'/>
        </div>
    )
}

export default CreatePlan;