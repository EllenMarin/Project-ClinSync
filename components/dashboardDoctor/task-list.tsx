"use client";

import React, { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';
import { TaskType } from '@/types/types';
import TaskItem from './task-item';

interface TaskListProps {
  tasks: TaskType[];
  onAddTask?: () => void;
  onCompleteTask?: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onAddTask,
  onCompleteTask,
}) => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'pending') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-col space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900">Tasks</h3>
          <Button 
            variant="default" 
            size="sm" 
            //icon={<Plus size={16} />}
            onClick={onAddTask}
          >
            Add Task
          </Button>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            //variant={filter === 'all' ? 'primary' : 'ghost'} 
            size="sm"
            onClick={() => setFilter('all')}
          >
            All
          </Button>
          <Button 
            //variant={filter === 'pending' ? 'primary' : 'ghost'} 
            size="sm"
            onClick={() => setFilter('pending')}
          >
            Pending
          </Button>
          <Button 
            //variant={filter === 'completed' ? 'primary' : 'ghost'} 
            size="sm"
            onClick={() => setFilter('completed')}
          >
            Completed
          </Button>
          <div className="ml-auto">
            <Button 
              variant="outline" 
              size="sm"
              //icon={<Filter size={16} />}
            >
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-auto p-0">
        <div className="divide-y divide-gray-100">
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskItem 
                key={task.id} 
                task={task} 
                onComplete={onCompleteTask}
              />
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              {filter === 'all' 
                ? 'No tasks available' 
                : filter === 'pending' 
                  ? 'No pending tasks' 
                  : 'No completed tasks'}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskList;