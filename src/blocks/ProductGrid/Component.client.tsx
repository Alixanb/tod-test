"use client"

import { Media } from '@/components/Media';
import { Button } from '@/components/ui/button';
import type { ProductGridBlock } from '@/payload-types';
import { Check, Search } from 'lucide-react';
import React from 'react';

type Products = ProductGridBlock['products'];
type OrderType = "new" | "priceAsc" | "priceDesc" | "rating";
const orderTypes: Record<OrderType, string> = {
  new: "New",
  priceAsc: "Price ascending",
  priceDesc: "Price descending",
  rating: "Rating"
} as const;

interface ProductGridBlockClientProps {
  products: Products;
}

export const ProductGridBlockClient: React.FC<ProductGridBlockClientProps> = ({ products }) => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  const [articles, setArticles] = React.useState<Products>(products);
  const [orderType, setOrderType] = React.useState<OrderType>("new"); 
  const inputRef = React.useRef<HTMLInputElement>(null); 

  const handleSearchBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value)

    if (value.length < 2) {
      setArticles(products)
      return;
    }

    orderArticles()
  }

  const handleTypeSelect = (type: OrderType) => {
    setOrderType(type);

    orderArticles()
  }

  const orderArticles = () => {

    // Filter by the search bar content
    let newArticles = products?.filter((p) => 
          p.title.toLowerCase().includes(searchValue.toLowerCase()) || 
          p.description?.toLowerCase().includes(searchValue.toLowerCase()))

    // Order by the button type 
    newArticles?.sort(() => articleSort(newArticles, orderType))

    setArticles(newArticles);
  }



  return (
    <>
      <div className="flex justify-between mb-12">
        <div className="flex items-center border border-gray-200 rounded-full w-80 outline-primary outline-2 outline-offset-2 focus-within:outline py-2 px-4" onClick={() => inputRef.current?.focus()}>
          <input type="text" onChange={handleSearchBarChange} className='grow focus:outline-none' placeholder='Search' ref={inputRef}/>
          <Search className='size-4 text-primary' />
        </div>
        <div className="flex gap-2">
          {Object.entries(orderTypes).map(([key, label]) => (
            <TypeButton key={key} type={key as keyof typeof orderTypes} label={label} isActive={orderType === key} onClick={handleTypeSelect} />
          ))}
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto">
        {articles?.map((articles, index) => {
          const { image, title, description } = articles
          return (
            <div
              key={index}
              className="flex-1 min-w-[280px] bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-4"
            >
              {image && typeof image !== 'string' && (
                <div className="h-[247px] w-full relative">
                  <Media resource={image} className="w-full h-full object-cover" subClassName='h-full object-cover' />
                </div>
              )}
              <div className="flex flex-col gap-2">
                <p className="text-base">{description || 'Text'}</p>
                <p className="text-base font-semibold">{title}</p>
              </div>
            </div>
          )
        })}
        {!articles?.length && (
          <p className='text-slate-600'>
            No article found
          </p>
        )}
    </div>

    </>
  )
}

interface ITypeButton { 
  type: OrderType,
  label: string, 
  isActive: boolean
  onClick: (type: ITypeButton['type']) => void
}

const TypeButton = ({ type, label, isActive, onClick } : ITypeButton) => {
  return (
    <Button variant={isActive ? "default" : "secondary"} onClick={() => onClick(type)}>
      {isActive && <Check className='size-4 mr-1.5' />}
      {label}
    </Button>
  )
}

function articleSort(articles: Products, type: OrderType ) {
  // Here sort logic
  return 0;
}