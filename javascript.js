Vue.component('tasks',{
	template:`<ul class="todoList">
				<li is="task" :task="task" :foo="tasks" @update:foo="deleteTodo()" v-for="task in tasks" :key="task.id" ></li>
			</ul>`,
	props: ['tasks'],
	methods: {
        deleteTodo(key){
        	this.tasks.splice(key,1);
        } 
	},
});
Vue.component('task',{
	template:`<li class="active" :class="{'strikeLi':task.completed ,editing: task.editMode }">
					<div class="view">
                        <input type="checkbox" v-model="task.completed" />
                        <span :class="{'strike':task.completed}" @click="turnOnEditMode()">{{task.description}}</span>
                        <button @click="deleteTodo()">✖</button>
                    </div>
                    <input class="edit" type="text" v-model="task.description" name="edit" @keyup="$event.keyCode == 13 ? turnOffEditMode() : null" @blur="turnOffEditMode()">
				</li>`,

	props: ['task'],
	methods: {
	    turnOnEditMode: function(){
	    	this.task.editMode = true;
	    },
	    turnOffEditMode(){
	        this.task.editMode = false;
	    }, 
        deleteTodo(key){
        	this.$emit('update:foo', key);
        } 
	},

});

function funTasks(){
	var tasks=[
			{id:0,description:'Go to the store',completed:true,editMode:false},
			{id:1,description:'Clear inbox',completed:false,editMode:false},
			{id:2,description:'Make dinner',completed:false,editMode:false}
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