```js
import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  // sample data to add
  const course = new new Course({
    name: 'Node.js Course',
    author: 'Mosh',
    tags: ['node', 'backend'],
    isPublished: true
  });
  
  //Saving to database mongodb  
  const result = await course.save()
  console.log(result)
}

createCourse()

```
