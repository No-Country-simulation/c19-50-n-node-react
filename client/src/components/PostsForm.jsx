
/**
 * 
 * 
title
string
Título de la publicación

content
string
Contenido de la publicación

category
number
ID de la categoría

price
number
Precio de la publicación

date
string($date)
Fecha de la publicación

latitude
number
Latitud de la ubicación

longitude
number
Longitud de la ubicación

address
string
Dirección de la publicación

image
string($binary)
Subir una
 */

import { useState, useRef, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export const PostsForm = () => {

  const fileImage = useRef(null)

  useEffect(() => {
    console.dir(fileImage.current)
  }, [fileImage])

  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    price: "",
    date: "",
    latitude: "",
    longitude: "",
    address: "",
    image: "",
  })


  return (
    <>
      <form className='min-w-96 flex flex-col gap-2'>
        <div>
          <label htmlFor="title">Título</label>
          <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}
          type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="content">Contenido</label>
          <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          
        )}
          id="content" name="content" />
        </div>
        <div>
          <label htmlFor="category">Categoría</label>
          <select
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}          
          name="category" id="category">
            <option value="1">Categoría 1</option>
            <option value="2">Categoría 2</option>
            <option value="3">Categoría 3</option>
          </select>

        </div>
        <div>
          <label htmlFor="price">Precio</label>
          <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

          )}          
          type="number" id="price" name="price" />
        </div>
        <div>
          <label htmlFor="date">Fecha</label>
          <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

          )}
          type="date" id="date" name="date" />
        </div>
        <div>
          <label htmlFor="latitude">Latitud</label>
          <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

          )}          
          type="number" id="latitude" name="latitude" />
        </div>
        <div>
          <label htmlFor="longitude">Longitud</label>
          <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

          )}          
          type="number" id="longitude" name="longitude" /> 
        </div>
        <div>
          <label htmlFor="address">Dirección</label>
          <input
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

          )}          
          type="text" id="address" name="address" />
        </div>
        <div className='mt-4'>
          <label
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",

          )}                    
          htmlFor="image">
            {fileImage.current?.files?.length > 0 ? fileImage.current?.files[0].name : 'Subir una imagen'}
          </label>
          <input ref={fileImage} onChange={(e)=> console.log(e)} className='hidden' type="file" id="image" name="image" />
        </div>
          <div>
          <Button className='mt-4 w-full' type="submit">Enviar</Button>
          </div>
      </form>
    </>
  )
}
