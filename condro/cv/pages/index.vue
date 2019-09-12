<template>
  <div>
    <Title />
    <Address :address="address" />
    <Profile :items="profileItems" />
    <List :title="'Education'" :items="educationItems" />
    <List :title="'Awards and Honors'" :items="honorsItems" />
    <List :title="'Experiences'" :items="expItems" />
    <List :title="'Projects'" :items="projectItems" />
  </div>
</template>

<script>
import Title from '~/components/TitleCard'
import Address from '~/components/AddressCard'
import Profile from '~/components/ProfileCard'
import List from '~/components/ListCard'

export default {
  components: {
    Title,
    Address,
    Profile,
    List
  },

  data: () => {
    return {
      address: [
        {
          label: 'Temporary Address',
          text: 'Jl. Beta No 13, Cigadung, Cibeunying Kaler, Bandung'
        },
        {
          label: 'Mail',
          text: 'condro@outlook.co.id'
        },
        {
          label: 'Phone',
          text: '+62 85773746786'
        }
      ],
      profileItems: [
        'Able to talk with C/C++, PHP, Golang, Ruby, Javascript(Node and Vue) Able to design, implement, and query mySQL & mongoDB',
        'Familiar using Git, Terminal, Team Collaboration Tools including Atlassian, Jira & Basecamp',
        'Experienced in building REST API, Vue Front End, and being Fullstack Web Developer',
        'Skilled using various libraries including PHP Laravel, Ruby on Rails, or building from from scratch'
      ],
      educationItems: [
        {
          title: 'Institut Teknologi Bandung',
          subtitle: 'Bachelor’s Degree - Sistem dan Teknologi Informasi',
          time: '2015 - present'
        },
        {
          title: 'SMA N SBBS (Sragen Bilingual Boarding School)',
          subtitle: 'High School - Science',
          time: '2012-2015'
        },
        {
          title: 'Delta Koleji - Samsun, Turkey',
          subtitle: 'Students Exchange Programs',
          time: '2012-2013'
        }
      ],
      honorsItems: [
        {
          title: 'Best Idea',
          subtitle: 'University Internal Event (Inkubator IT Idea Challenge)',
          time: '2018'
        },
        {
          title: 'Top Five C-GEN Festival for Smart City',
          subtitle: 'Smart City Competition held in UNIDUS',
          time: '2018'
        }
      ],
      expItems: [
        {
          title: 'Back End Engineer [Intern]',
          subtitle: 'Bukalapak',
          time: 'summer 2018'
        },
        {
          title: 'Back End Engineer [Part Time]',
          subtitle: 'meridian.id',
          time: 'summer 2018 and summer 2019'
        },
        {
          title: 'Teaching Assistant',
          subtitle:
            'Basic Software Engineering Course and Software Development Course - ITB',
          time: '2016-2019'
        },
        {
          title: 'Laboratory Assistant',
          subtitle: 'Software Engineering Laboratory ITB',
          time: '2016-2019'
        },
        {
          title: 'Treasurer',
          subtitle: 'Learning and Cultural Center Bandung',
          time: '2016-2019'
        },
        {
          title: 'Web Developer and Web Master',
          subtitle: 'Learning and Cultural Center Bandung',
          time: '2015-2017'
        }
      ],
      projectItems: [
        {
          title: 'Tweak (fitness app center) with Meridian.id',
          subtitle: 'build API, Android, and Front-End (2 side app)',
          time: 'Feb 2018 - May 2018'
        },
        {
          title: 'Microservice : Seller Acquisition for Bukalapak.com',
          subtitle: 'built using GoLang and Ruby on Rails',
          time: 'May 2018 - Aug 2018'
        },
        {
          title: 'Knowledge Base Contact Center Badan POM RI with Meridian.id',
          subtitle: 'built for BPOM RI using Laravel',
          time: 'Feb 2018 - May 2018'
        },
        {
          title: 'MBWG Webpage',
          subtitle:
            'Redesign official website of Marching Band ITB, built using Wordpress',
          time: '2017'
        },
        {
          title: 'Festival Paduan Suara PSM-ITB 2017',
          subtitle: 'Competition Web Registration Portal, built using Laravel',
          time: 'Sep 2016 - Feb 2017'
        },
        {
          title: 'BPJS Questionnaire Website',
          subtitle:
            'Digitalize the questionnaire of BPJS Kesehatan Indonesia, built using Laravel',
          time: 'May 2017 - Sep 2017'
        },
        {
          title: 'MTI ITB Official Webpage',
          subtitle:
            'Blog and Member Portal for Industrial Engineering Students ITB, built using Wordpress and Laravel',
          time: 'Sep 2016 - Jan 2017'
        },
        {
          title: 'Liga Medika UI 2017',
          subtitle:
            'Competition Registration Web Portal for Medical Science University of Indonesia, built using Laravel',
          time: '2016'
        }
      ]
    }
  }
}
</script>
