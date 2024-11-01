'use client';

import 'reflect-metadata';
import Button from "@/ui/button";
import Image from "next/image";
import Switch from "react-switch";
import {ChangeEvent, useState} from "react";
import {mUseCase} from "@/di/providers";
import {SearchRequest} from "@/domain/search-request";

export default function Page() {
  const [clockChecked, setClockChecked] = useState(true);
  const [standClockChecked, setStandClockChecked] = useState(true);
  const [windmillChecked, setWindmillChecked] = useState(true);
  const [acChecked, setACChecked] = useState(true);
  const [content, setContent] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [numberValue, setNumberValue] = useState(0);

  const handleClockChange = (checked: boolean) => {
    setClockChecked(checked)
  }
  const handleStandClockChange = (checked: boolean) => {
    setStandClockChecked(checked)
  }
  const handleWindmillChange = (checked: boolean) => {
    setWindmillChecked(checked)
  }
  const handleACChange = (checked: boolean) => {
    setACChecked(checked)
  }
  const handleSearchValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }
  const handleNumberValue = (event: ChangeEvent<HTMLInputElement>) => {
    setNumberValue(Number(event.target.value))
  }

  const searchOnClick = async () => {
    const req: SearchRequest = {
      clock: clockChecked,
      standClock: standClockChecked,
      windmill: windmillChecked,
      ac: acChecked,
      name: searchValue,
      number: numberValue,
    }
    const promiseString = mUseCase.GetMaterialList(req)
    promiseString.then(function (content: string) {
      setContent(content)
    })
  }

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-bold">家具製作列表</h1>
      <div className="w-full">
        <div>
          <h4>製作時間減少選項</h4>
          <div>
            <span className="align-text-bottom">木製古鐘 (-2%)：</span>
            <Switch onChange={handleClockChange} checked={clockChecked} height={18} width={36}/>
            <p/>
          </div>
          <div>
            <span className="align-text-bottom">立鐘 (-3%)：</span>
            <Switch
              onChange={handleStandClockChange} checked={standClockChecked} height={18} width={36}/>
            <p/>
          </div>
          <div>
            <span className="align-text-bottom">風車 (-3%)：</span>
            <Switch
              onChange={handleWindmillChange} checked={windmillChecked} height={18} width={36}/>
            <p/>
          </div>
          <div>
            <span className="align-text-bottom">分離式冷氣 (-14%)：</span>
            <Switch onChange={handleACChange} checked={acChecked} height={18} width={36}/>
            <p/>
          </div>

          <form
            action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            className="relative ml-auto flex-1 md:grow-0">
            <input
              value={searchValue}
              onChange={handleSearchValue}
              className="flex h-10 border border-input px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg md:w-[200px] lg:w-[300px]"
              placeholder="家具名稱" type="search" name="furniture-name"/>
            <p/>
            <input
              value={numberValue}
              onChange={handleNumberValue}
              className="flex h-10 border border-input px-3 py-2 text-sm text-black ring-offset-background file:border-0 file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-lg md:w-[200px] lg:w-[300px]"
              placeholder="數量" type="number" name="number" min="1" max="999"/>
          </form>
          <Button className="content-center w-8 h-8" onClick={searchOnClick}>
            <Image
              className="dark:invert origin-center"
              src="/search.svg"
              alt="Search"
              width={32}
              height={32}
              priority
            />
          </Button>
        </div>
        <pre className="text-base">{content}</pre>
      </div>
    </div>
  );
}
