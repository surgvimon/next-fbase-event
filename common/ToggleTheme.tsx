import { setTheme } from '@/redux/themeReducer';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ToggleTheme() {
    const { theme } = useSelector((state:any) => state.themes);
    const dispatch = useDispatch();
  return (
    <>
    {theme === "light" ? (
    <span style={{fontSize: "24px"}} onClick={() => { dispatch(setTheme("dark"))}}>🌓</span>
    ) : (
    <span style={{fontSize: "24px"}} onClick={() => { dispatch(setTheme("light"))}}>🌞</span>
    )}
    </>
  )
}
