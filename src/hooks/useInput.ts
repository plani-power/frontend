import { useRef } from "react";

export const useInput = () => {
    const input = useRef();
    return {input};
}