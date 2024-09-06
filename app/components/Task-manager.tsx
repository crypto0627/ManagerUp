'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { PlusCircle, Trash2, Mountain } from 'lucide-react'

interface Task {
  id: number
  title: string
  completed: boolean
  listId: number
}

interface TaskList {
  id: number
  name: string
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskLists, setTaskLists] = useState<TaskList[]>([
    { id: 1, name: 'Personal' },
    { id: 2, name: 'Work' }
  ])
  const [newTask, setNewTask] = useState('')
  const [newList, setNewList] = useState('')
  const [activeList, setActiveList] = useState<number>(1)

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false, listId: activeList }])
      setNewTask('')
    }
  }

  const addList = () => {
    if (newList.trim() !== '') {
      setTaskLists([...taskLists, { id: Date.now(), name: newList }])
      setNewList('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const filteredTasks = tasks.filter(task => task.listId === activeList)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Mountain className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-blue-600">TaskMaster</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/login">
                <Button variant="ghost" className="mr-2">Login</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Task Lists</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {taskLists.map(list => (
                    <Button
                      key={list.id}
                      variant={activeList === list.id ? "default" : "outline"}
                      className="w-full justify-start"
                      onClick={() => setActiveList(list.id)}
                    >
                      {list.name}
                    </Button>
                  ))}
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <Input
                    type="text"
                    value={newList}
                    onChange={(e) => setNewList(e.target.value)}
                    placeholder="New list name"
                    className="flex-grow"
                  />
                  <Button onClick={addList} size="icon">
                    <PlusCircle className="h-4 w-4" />
                    <span className="sr-only">Add new list</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Task Manager - {taskLists.find(list => list.id === activeList)?.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex mb-4">
                  <Input 
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                    className="mr-2"
                  />
                  <Button onClick={addTask}>Add Task</Button>
                </div>
                <ul className="space-y-2">
                  {filteredTasks.map(task => (
                    <li key={task.id} className="flex items-center justify-between p-2 bg-white rounded-md shadow-sm">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id={`task-${task.id}`}
                          checked={task.completed}
                          onCheckedChange={() => toggleTask(task.id)}
                        />
                        <label 
                          htmlFor={`task-${task.id}`}
                          className={`flex-grow ${task.completed ? 'line-through text-gray-500' : ''}`}
                        >
                          {task.title}
                        </label>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete task</span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2023 TaskMaster. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}