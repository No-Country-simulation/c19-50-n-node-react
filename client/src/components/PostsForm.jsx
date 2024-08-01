
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

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { fetchCategories } from '@/services/category.service'
import { createPost } from '@/services/post.service'

export const PostsForm = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories().then((data) => {
      if (!data.ok) return setCategories([])
      setCategories(data.data)
    })
  }, [])

  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
    price: "",
    date: "",
    latitude: "",
    longitude: "",
    address: "",
    image: {}
  })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', post.title)
    formData.append('content', post.content)
    formData.append('category', post.category)
    formData.append('price', post.price)
    formData.append('date', post.date)
    formData.append('latitude', post.latitude)
    formData.append('longitude', post.longitude)
    formData.append('address', post.address)
    formData.append('image', post.image)

    await createPost(formData)

  }


  return (
    <>
      <form className='min-w-96 flex flex-col gap-2'>
        <div>
          <label htmlFor="title">Título</label>
          <input
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}
          type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="content">Contenido</label>
          <textarea
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            
          )}
          id="content" name="content" />
        </div>
        <div>
          <label htmlFor="category">Categoría</label>
          <select
          onChange={(e) => setPost({ ...post, category: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}          
          name="category" id="category">
            <option value="">Selecciona una categoría</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>

        </div>
        <div>
          <label htmlFor="price">Precio</label>
          <input
          onChange={(e) => setPost({ ...post, price: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}          
          type="number" id="price" name="price" />
        </div>
        <div>
          <label htmlFor="date">Fecha</label>
          <input
          onChange={(e) => setPost({ ...post, date: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}
          type="date" id="date" name="date" />
        </div>
        <div>
          <label htmlFor="latitude">Latitud</label>
          <input
          min={-90}
          max={90}
          onChange={(e) => setPost({ ...post, latitude: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}          
          type="number" id="latitude" name="latitude" />
        </div>
        <div>
          <label htmlFor="longitude">Longitud</label>
          <input
          min={-180}
          max={180}
          onChange={(e) => setPost({ ...post, longitude: e.target.value })}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          )}          
          type="number" id="longitude" name="longitude" /> 
        </div>
        <div>
          <label htmlFor="address">Dirección</label>
          <input
          onChange={(e) => setPost({ ...post, address: e.target.value })}
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
            {post.image?.name || 'Subir una imagen'}
          </label>
          <input  onChange={
            (e)=> setPost({ ...post, image: e.target.files[0] })
            } className='hidden' type="file" id="image" name="image" />
        </div>
          <div>
          <Button
          onClick={handleSubmit}
          className='mt-4 w-full' type="submit">Enviar</Button>
          </div>
      </form>
    </>
  )
}
