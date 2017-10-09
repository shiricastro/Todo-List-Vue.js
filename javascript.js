Vue.component('tasks',{
	template:`<ul class="todoList">
				<li class="active" v-for="(task,key) in tasks" :class="{'strikeLi':task.completed ,editing: task.editMode }">
					<div class="view">
                        <input type="checkbox" v-model="task.completed" />
                        <span :class="{'strike':task.completed}" @click="turnOnEditMode(key)">{{task.description}}</span>
                        <button @click="deleteTodo(key)">✖</button>
                    </div>
                    <input class="edit" type="text" v-model="task.description" name="edit" @keyup="$event.keyCode == 13 ? turnOffEditMode(key) : null" @blur="turnOffEditMode(key)">
				</li>
			</ul>`,

	props: ['alltasks'],
	data: function () {
	  return { tasks: this.alltasks }
	},
	methods:{
		turnOnEditMode(key){
            this.tasks[key].editMode = true;
        },
        turnOffEditMode(key){
            this.tasks[key].editMode = false;
        },
        deleteTodo(key){
        	this.tasks.splice(key,1);
        } 
	}
});


function funTasks(){
	var tasks=[
			{description:'Go to the store',completed:true,editMode:false},
			{description:'Clear inbox',completed:false,editMode:false},
			{description:'Make dinner',completed:false,editMode:false}
		]
		return tasks
}


new Vue({
	el:'#root',
	data:{
		newTask:'',
		tasks:funTasks()
	},
	methods:{
		addTask(){
			this.tasks.push({description:this.newTask,completed:false,editMode:false});
			this.newTask='';
		}
	}
})