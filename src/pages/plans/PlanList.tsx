import { useEffect, useState } from "react";
import styled from "styled-components";

export type plan = {
    id: number,
    name: string,
    creator: string,
    created: any,
    hashtag: string,
    memberCount: number,
    status: number
}

const planStatus = {
    recruiting: 0,
    recruitingEnd: 1,
    end: 2

}
const getPlanStatName = (status: number) => {
    switch (status) {
        case planStatus.recruiting:
            return '모집중';
        case planStatus.recruitingEnd:
            return '모집마감';
        case planStatus.end:
            return '종료';
        default:
            return ''
    }

}
const Ul = styled.ul`
    width: 100%;
    padding: 20px 0;
`
const Li = styled.li`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
    height: 70px;
    border: 2px solid #ddd;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    &:hover {
        transition: all 0.2s ease;
        -webkit-transform: translateY(-5px);
        transform: translateY(-5px);
    }
    .plan-info {
        width: 100%;
        display: flex;
        justify-conten: left;
        .plan-name {
            font-weight: bold;
        }
        .status {
            margin-left: auto;
            font-size: 12px;
            color: #FFE135;
        }
    }
    .hashtag-list {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        .hashtag {
            display: flex;
            align-items: center;
            padding: 6px;
            border-radius: 10px;
            font-size: 12px;
            color: #808080;
            margin-right: 4px;
        }
    }
`

const MoreButton = styled.button`
    dispaly: flex;
    width: 100%;
    height: 60px;
    color: #FFE135;
    font-weight: bold;
    background-color:white;
    border: 3px solid #FFE135;
    border-radius: 10px;
    cursor: pointer;
`

const PlanItem = (props: { plan: plan }) => {
    const { name, hashtag, status } = props.plan;
    return (
        <Li>
            <div className="plan-info">
                <p className="plan-name">{name}</p>
                <p className="status">{getPlanStatName(status)}</p>

            </div>
            <ul className="hashtag-list">
                {hashtag.split(',').map((tag) => <li key={tag} className="hashtag"><span>#{tag}</span></li>)}
            </ul>
        </Li>
    )
}
export const PlanList = (props: { plans: plan[] }) => {

    const { plans } = props;
    const pageSize = 10;
    const [pageNum, setPageNum] = useState(1);
    const [list, setList] = useState<plan[]>(plans?.slice(0, pageNum * pageSize));

    useEffect(() => {
        if (pageNum * pageSize < plans.length) {
            setList(plans?.slice(0, pageNum * pageSize))
        }
    }, [pageNum])

    const addList = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight - scrollTop === clientHeight) {
            setPageNum(pageNum + 1);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', addList)
        return () => {
            window.removeEventListener('scroll', addList)
        }
    })
    return (
        <>
            <Ul>
                {list.map((plan) => {
                    return <PlanItem key={plan.id} plan={plan} />
                })}
            </Ul>
            {/* {pageNum * pageSize === plans.length - 1 ? '' : <MoreButton onClick={() => {
                setPageNum(pageNum + 1);
            }}>더보기</MoreButton>} */}
        </>
    )
}