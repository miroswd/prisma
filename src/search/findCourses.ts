import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

const findCourses = {
  byCourse: async () => {
    const result = await prisma.courses.findMany({
      // where: {
      //   id: "2b29a3e8-2eb5-4700-bbff-91df0c522ff9"
      // },
      include: {
        CoursesModules: true
      }
    })

    console.log(JSON.stringify(result, null, 4))
  },
  byCoursesModules: async () => {
    const result = await prisma.coursesModules.findMany({
      include: {
        course: true, 
        module: true
      }
    })

    console.log(JSON.stringify(result, null, 4))
    
  }
}

findCourses.byCoursesModules()