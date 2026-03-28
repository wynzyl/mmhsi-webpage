import { config } from 'dotenv'
config({ path: '.env.local' })
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import {
  boardPassers,
  mathScience,
  activities,
  alumni,
  graduates,
  events,
  news,
} from './schema'

const client = postgres(process.env.DATABASE_URL!)
const db = drizzle(client)

async function seed() {
  console.log('Seeding database…')

  await db.delete(boardPassers)
  await db.insert(boardPassers).values([
    { name: 'Engr. Nathaniel Ydnar C. Torres', exam: 'Civil Engineering Licensure Examination', year: 2025, class: 'Junior High School Class of 2017', image: '/board-passers/passer-1.jpg' },
    { name: 'Juliane Marie Z. Alvarez, RN', exam: 'Nursing Licensure Examination', year: 2025, class: 'Junior High School Class of 2019', image: '/board-passers/passer-2.jpg' },
    { name: 'David Anthony L. Ballad, RN', exam: 'Nursing Licensure Examination', year: 2025, class: 'Junior High School Class of 2017', image: '/board-passers/passer-3.jpg' },
    { name: 'Rizza Mae C. Martin, RN', exam: 'Nursing Licensure Examination', year: 2025, class: 'Grade 8 Class of 2014', image: '/board-passers/passer-4.jpg' },
    { name: 'Richard B. Rincuraya, RPh', exam: 'Pharmacists Licensure Examination', year: 2025, class: 'Junior High School Class of 2019', image: '/board-passers/passer-5.jpg' },
  ])
  console.log('✓ board_passers')

  await db.delete(mathScience)
  await db.insert(mathScience).values([
    { title: 'Quiz Bee 8 – Group Category', participants: 'Madriaga, Zyraine Zea & Neri, Zion Gregory', award: 'Third Place', level: 'Secondary Level', date: 'March 7, 2026', category: 'Quiz Bee', image: '/math-science/achievement-1.jpg' },
    { title: 'Quiz Bee 8 – Individual Category', participants: 'Neri, Zion Gregory', award: 'Fourth Place', level: 'Secondary Level', date: 'March 7, 2026', category: 'Quiz Bee', image: '/math-science/achievement-2.jpg' },
    { title: 'Quiz Bee SHS – Individual Category', participants: 'Egusquiza, Meyshea', award: 'Fifth Place', level: 'Secondary Level', date: 'March 7, 2026', category: 'Quiz Bee', image: '/math-science/achievement-3.jpg' },
    { title: 'Quiz Bee 6 – Team Category', participants: 'Gandia, Rhylee Dane & Lalimarmo, Kim Jaedon', award: 'Fifth Place', level: 'Elementary Level', date: 'March 6, 2026', category: 'Quiz Bee', image: '/math-science/achievement-4.jpg' },
    { title: "Rubik's Cube 3x3 – Grade 10", participants: 'Adsuara, Adrian', award: 'Third Place', level: 'Secondary Level', date: 'March 7, 2026', category: 'Speed Solving', image: '/math-science/achievement-5.jpg' },
    { title: 'Quiz Bee 7 – Team Category', participants: 'Maristela, Franchesca Fiona & Sayson, Jedejah Wilona', award: 'Third Place', level: 'Secondary Level', date: 'March 7, 2026', category: 'Quiz Bee', image: '/math-science/achievement-6.jpg' },
  ])
  console.log('✓ math_science')

  await db.delete(activities)
  await db.insert(activities).values([
    { title: 'Annual School Press Conference', category: 'Press Conference', date: 'March 28, 2026', description: 'Students showcase their journalism skills and present news stories from around the school and community.' },
    { title: 'Interscholastic Sports Tournament', category: 'Sports', date: 'April 15, 2026', description: 'Annual competition featuring basketball, volleyball, badminton, and track and field events.' },
    { title: 'Regional Math and Science Olympiad', category: 'Math & Science', date: 'May 10, 2026', description: 'Our students compete against peers from other schools in rigorous math and science challenges.' },
    { title: 'Student Leadership Summit', category: 'Events', date: 'March 20, 2026', description: 'Forum bringing together student leaders to discuss school improvement and community engagement initiatives.' },
    { title: 'Science and Innovation Fair', category: 'Math & Science', date: 'May 25, 2026', description: 'Students present research projects and innovative solutions to real-world problems.' },
    { title: 'Sports Day Championships', category: 'Sports', date: 'April 8, 2026', description: 'Inter-class competition promoting fitness, teamwork, and school spirit among all students.' },
  ])
  console.log('✓ activities')

  await db.delete(alumni)
  await db.insert(alumni).values([
    { name: 'Maria Santos', batch: '2018', university: 'University of the Philippines - Diliman', program: 'BS Computer Science', achievement: 'Valedictorian, Google Internship Recipient', story: 'From excelling in our STEM programs to leading tech innovation projects, Maria has become a role model for students pursuing computer science.' },
    { name: 'Juan Dela Cruz', batch: '2019', university: 'De La Salle University', program: 'BS Medical Science', achievement: "Dean's List, Medical Aptitude Award", story: "Juan's dedication to science and community service prepared him well for his medical studies and aspirations to serve underserved communities." },
    { name: 'Anna Reyes', batch: '2017', university: 'Ateneo de Manila University', program: 'BS Engineering', achievement: "President's List, Engineering Excellence Award", story: 'Through our rigorous curriculum and hands-on learning, Anna developed strong problem-solving skills that have made her an outstanding engineer.' },
    { name: 'Carlos Mendoza', batch: '2020', university: 'Philippine Science High School', program: 'Advanced Science Program', achievement: 'Science Olympiad Finalist, Scholarship Awardee', story: "Carlos's passion for sciences, nurtured through our advanced programs, led him to pursue higher studies at the country's premier science school." },
    { name: 'Isabella Torres', batch: '2019', university: 'Miriam College', program: 'BS Business Administration', achievement: 'Cum Laude, Entrepreneurship Award', story: "Isabella's leadership experiences as class president translated into successful business ventures while still in college." },
    { name: 'Marco Villanueva', batch: '2018', university: 'Far Eastern University', program: 'BS Architecture', achievement: "Design Competition Winner, Dean's List", story: 'The creative foundation fostered at Merryland enabled Marco to excel in architectural design and win multiple prestigious competitions.' },
  ])
  console.log('✓ alumni')

  await db.delete(graduates)
  await db.insert(graduates).values([
    { name: 'Alex Torres', university: 'University of the Philippines Diliman', course: 'Computer Science', batch: 2023 },
    { name: 'Jessica Reyes', university: 'Ateneo de Manila University', course: 'Business Administration', batch: 2023 },
    { name: 'Marco Villanueva', university: 'De La Salle University', course: 'Civil Engineering', batch: 2023 },
    { name: 'Sofia Mendez', university: 'University of Santo Tomas', course: 'Medicine', batch: 2023 },
    { name: 'Ricardo Santos', university: 'Polytechnic University of the Philippines', course: 'Information Technology', batch: 2023 },
    { name: 'Maria Cruz', university: 'Miriam College', course: 'Psychology', batch: 2023 },
    { name: 'Daniel Lopez', university: 'Philippine Normal University', course: 'Education', batch: 2023 },
    { name: 'Isabella Garcia', university: 'University of Asia and the Pacific', course: 'Economics', batch: 2023 },
    { name: 'Thomas Rodriguez', university: 'Mapúa University', course: 'Mechanical Engineering', batch: 2022 },
    { name: 'Amanda Fernandez', university: 'Far Eastern University', course: 'Architecture', batch: 2022 },
    { name: 'Christopher Tan', university: 'University of the Philippines Los Baños', course: 'Agriculture', batch: 2022 },
    { name: 'Michelle Wong', university: 'Chinese University of Hong Kong', course: 'Nursing', batch: 2022 },
  ])
  console.log('✓ graduates')

  await db.delete(events)
  await db.insert(events).values([
    { title: 'Student Leadership Summit', date: 'March 20, 2026', time: '9:00 AM – 3:00 PM', location: 'School Auditorium', description: 'A day-long summit bringing together student leaders to discuss school improvement initiatives and community engagement.', category: 'Educational' },
    { title: 'Annual School Press Conference', date: 'March 28, 2026', time: '2:00 PM – 5:00 PM', location: 'Main Hall', description: 'Students showcase their journalism work and present news stories. Guests and media welcome.', category: 'Cultural' },
    { title: 'Interscholastic Sports Tournament', date: 'April 8–15, 2026', time: '7:00 AM – 5:00 PM', location: 'Sports Complex', description: 'Annual inter-class sports competition featuring basketball, volleyball, badminton, and track and field.', category: 'Sports' },
    { title: 'Career and Scholarship Fair', date: 'April 20, 2026', time: '1:00 PM – 5:00 PM', location: 'Auditorium & Grounds', description: 'Meet representatives from top universities and companies offering scholarships and internship opportunities.', category: 'Career' },
    { title: 'Regional Math and Science Olympiad', date: 'May 10, 2026', time: '8:00 AM – 4:00 PM', location: 'Science Building', description: 'Our students compete against peers from other schools in challenging math and science competitions.', category: 'Academic' },
    { title: 'Science and Innovation Fair', date: 'May 25–26, 2026', time: '9:00 AM – 6:00 PM', location: 'Campus Grounds', description: 'Students present research projects and innovative solutions. Open to the public.', category: 'Academic' },
    { title: 'Annual Graduation Ceremony', date: 'June 15, 2026', time: '9:00 AM – 12:00 PM', location: 'School Auditorium', description: 'Celebrate our graduating class as they receive their diplomas and embark on new journeys.', category: 'Celebration' },
    { title: 'Parent-Teacher Conference', date: 'April 1–3, 2026', time: '2:00 PM – 6:00 PM', location: 'Classroom Block', description: 'Scheduled meetings between parents and teachers to discuss student progress and development.', category: 'Educational' },
  ])
  console.log('✓ events')

  await db.delete(news)
  await db.insert(news).values([
    { title: 'Merryland Wins National Science Olympiad Championship', date: 'March 10, 2024', category: 'Achievement', excerpt: 'Our science team clinched the top prize at the National Science Olympiad, showcasing the excellence of our STEM program.' },
    { title: 'New Modern Science Laboratory Opened', date: 'February 28, 2024', category: 'Infrastructure', excerpt: 'We are proud to announce the opening of our state-of-the-art science laboratory equipped with the latest technology.' },
    { title: 'Board Examination Results Released — 95% Pass Rate Achieved', date: 'February 15, 2024', category: 'Results', excerpt: 'Merryland celebrates exceptional results with 95% of our test-takers passing the board exams on their first attempt.' },
    { title: 'Sports Festival 2024 — Merryland Dominates', date: 'February 5, 2024', category: 'Sports', excerpt: 'Our athletes showed remarkable performance across multiple sporting events at the inter-school sports festival.' },
    { title: 'International Exchange Program Launched', date: 'January 28, 2024', category: 'Programs', excerpt: 'Merryland has established partnerships with schools in three countries to facilitate student cultural exchange programs.' },
    { title: 'Environmental Sustainability Initiative Launched', date: 'January 15, 2024', category: 'Environment', excerpt: 'We are launching a comprehensive environmental sustainability program to make our campus carbon-neutral by 2030.' },
    { title: 'Top Graduates Share Success Stories at Alumni Night', date: 'January 8, 2024', category: 'Alumni', excerpt: 'Recent alumni return to inspire current students with their journey to success in various fields and industries.' },
    { title: 'Parent-Teacher Symposium Strengthens School-Family Partnership', date: 'December 28, 2023', category: 'Community', excerpt: 'A successful event bringing parents and educators together to discuss student development and school initiatives.' },
  ])
  console.log('✓ news')

  console.log('\nDatabase seeded successfully!')
  await client.end()
}

seed().catch(err => {
  console.error('Seed failed:', err)
  process.exit(1)
})
