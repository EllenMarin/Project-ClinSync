import React from 'react';
import { CheckCircle, Circle, Clock, MoreVertical } from 'lucide-react';
import { Badge } from '../ui/badge';
import { TaskType } from '@/types/types';

interface TaskItemProps {
  task: TaskType;
  onComplete?: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete }) => {
  const handleComplete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onComplete) {
      onComplete(task.id);
    }
  };

  const getPriorityBadge = (priority: string) => {
    const priorityMap: Record<string, { variant: any; label: string }> = {
      high: { variant: 'danger', label: 'High' },
      medium: { variant: 'warning', label: 'Medium' },
      low: { variant: 'secondary', label: 'Low' },
    };

    const { variant, label } = priorityMap[priority] || { variant: 'secondary', label: priority };
    return <Badge variant={variant} >{label}</Badge>;
  };

  return (
    <div className="flex items-start p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group">
      <button
        className="flex-shrink-0 mt-0.5"
        onClick={handleComplete}
      >
        {task.completed ? (
          <CheckCircle size={20} className="text-green-500" />
        ) : (
          <Circle size={20} className="text-gray-300 group-hover:text-green-300" />
        )}
      </button>
      
      <div className="ml-3 flex-1">
        <div className="flex items-start justify-between">
          <h4 className={`font-medium ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
            {task.title}
          </h4>
          <div className="flex items-center space-x-2">
            {getPriorityBadge(task.priority)}
            <button className="p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-200">
              <MoreVertical size={16} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        <p className={`text-sm mt-1 ${task.completed ? 'text-gray-400 line-through' : 'text-gray-600'}`}>
          {task.description}
        </p>
        
        {task.dueDate && (
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Clock size={14} className="mr-1" />
            <span>{task.dueDate}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskItem;