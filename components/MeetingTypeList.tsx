"use client"
import HomeCard from "./HomeCard"
import { useState } from "react"
import { useRouter } from 'next/navigation';

const MeetingTypeList = () => {
  const router = useRouter()
  const [meetingTypes, setMeetingTypes] = 
  useState<'isScheduleMeeting'|'isJoiningMeeting'|
  'isInstantMeeting'| undefined>()

  return (
    <section className="grid grid-cols-1 gap-5
    md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
      img='/icons/add-meeting.svg'
      title='New Meeting'
      description='Start an instant Meeting'
      handleClick={()=>{setMeetingTypes('isJoiningMeeting')}}
      className='bg-orange-1'
      />
      <HomeCard
      img='/icons/schedule.svg'
      title='Schedule Meeting'
      description='Plan your meeting'
      handleClick={()=>{setMeetingTypes('isScheduleMeeting')}}
      className='bg-blue-1'
      />
      <HomeCard
      img='/icons/recordings.svg'
      title='Veiw Recordings'
      description='Checkout your recordings'
      handleClick={()=>{router.push('/recordings')}}
      className='bg-purple-1'
      />
      <HomeCard
      img='/icons/join-meeting.svg'
      title='Join Meeting'
      description='via invitation link'
      handleClick={()=>{setMeetingTypes('isJoiningMeeting')}}
      className='bg-yellow-1'
      />
    </section>
  )
}

export default MeetingTypeList