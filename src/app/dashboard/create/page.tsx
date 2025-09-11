import { handleFormSubmit } from '@/app/action'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import SubmitButton from '../../../../components/general/SubmitButton'

function CreateBlog() {
  return (
    <div className='p-1'>
      <Card className='max-w-2xl mx-auto mt-10'>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new post to share with the world</CardDescription>
        </CardHeader>
        <CardDescription>
          <form className='p-5 flex flex-col gap-3' action={handleFormSubmit}>
            <div className='flex flex-col gap-3'>
              <Label>Title</Label>
              <Input name="title" required type='text' placeholder='Title'/>
            </div>
             <div className='flex flex-col gap-3'>
              <Label>Content</Label>
              <Textarea name="content" required placeholder='Content'/>
            </div>
             <div className='flex flex-col gap-3'>
              <Label>Image URL</Label>
              <Input name="url" required type='text' placeholder='Image Url'/>
            </div>
            <SubmitButton/>
          </form>
        </CardDescription>
      </Card>
    </div>
  )
}

export default CreateBlog