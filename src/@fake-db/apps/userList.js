import mock from '../mock'

// ** Utils
import { paginateArray } from '../utils'

// Avatars Imports
import avatar1 from '@src/assets/images/avatars/1.png'
import avatar2 from '@src/assets/images/avatars/2.png'
import avatar3 from '@src/assets/images/avatars/3.png'
import avatar4 from '@src/assets/images/avatars/4.png'
import avatar5 from '@src/assets/images/avatars/5.png'
import avatar6 from '@src/assets/images/avatars/6.png'
import avatar7 from '@src/assets/images/avatars/7.png'
import avatar8 from '@src/assets/images/avatars/8.png'
import avatar9 from '@src/assets/images/avatars/9.png'
import avatar10 from '@src/assets/images/avatars/10.png'

const data = {
  users: [
    {
      id: 1,
      billing: '30000',
      fullName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      role: 'editor',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '',
      avatarColor: 'light-primary'
    },
    {
      id: 2,
      billing: '20000',
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      role: 'frontend',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: avatar10
    },
    {
      id: 3,
      billing: '10000',
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      role: 'tester',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: avatar1
    },
    {
      id: 4,
      billing: '30000',
      fullName: 'Cyrill Risby',
      company: 'Oozz PVT LTD',
      role: 'tester',
      username: 'crisby3',
      country: 'China',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: avatar9
    },
    {
      id: 5,
      billing: '10000',
      fullName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      role: 'backend',
      username: 'mhurran4',
      country: 'Pakistan',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: avatar10
    },
    {
      id: 6,
      billing: '10000',
      fullName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      role: 'frontend',
      username: 'shalstead5',
      country: 'China',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      currentPlan: 'company',
      status: 'active',
      avatar: '',
      avatarColor: 'light-success'
    },
    {
      id: 7,
      billing: '20000',
      fullName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      role: 'backend',
      username: 'bgallemore6',
      country: 'Canada',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      currentPlan: 'company',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-danger'
    },
    {
      id: 8,
      billing: '40000',
      fullName: 'Kathryne Liger',
      company: 'Pixoboo PVT LTD',
      role: 'frontend',
      username: 'kliger7',
      country: 'France',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: avatar9
    },
    {
      id: 9,
      billing: '10000',
      fullName: 'Franz Scotfurth',
      company: 'Tekfly PVT LTD',
      role: 'backend',
      username: 'fscotfurth8',
      country: 'China',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: avatar2
    },
    {
      id: 10,
      billing: '10000',
      fullName: 'Jillene Bellany',
      company: 'Gigashots PVT LTD',
      role: 'tester',
      username: 'jbellany9',
      country: 'Jamaica',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      currentPlan: 'company',
      status: 'inactive',
      avatar: avatar9
    },
    {
      id: 11,
      billing: '20000',
      fullName: 'Jonah Wharlton',
      company: 'Eare PVT LTD',
      role: 'backend',
      username: 'jwharltona',
      country: 'United States',
      contact: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: avatar4
    },
    {
      id: 12,
      billing: '30000',
      fullName: 'Seth Hallam',
      company: 'Yakitri PVT LTD',
      role: 'backend',
      username: 'shallamb',
      country: 'Peru',
      contact: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: avatar5
    },
    {
      id: 13,
      billing: '10000',
      fullName: 'Yoko Pottie',
      company: 'Leenti PVT LTD',
      role: 'backend',
      username: 'ypottiec',
      country: 'Philippines',
      contact: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: avatar7
    },
    {
      id: 14,
      billing: '10000',
      fullName: 'Maximilianus Krause',
      company: 'Digitube PVT LTD',
      role: 'frontend',
      username: 'mkraused',
      country: 'Democratic Republic of the Congo',
      contact: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      currentPlan: 'team',
      status: 'active',
      avatar: avatar9
    },
    {
      id: 15,
      billing: '10000',
      fullName: 'Zsazsa McCleverty',
      company: 'Kaymbo PVT LTD',
      role: 'tester',
      username: 'zmcclevertye',
      country: 'France',
      contact: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: avatar2
    },
    {
      id: 16,
      billing: '10000',
      fullName: 'Bentlee Emblin',
      company: 'Yambee PVT LTD',
      role: 'frontend',
      username: 'bemblinf',
      country: 'Spain',
      contact: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      currentPlan: 'company',
      status: 'active',
      avatar: avatar6
    },
    {
      id: 17,
      billing: '20000',
      fullName: 'Brockie Myles',
      company: 'Wikivu PVT LTD',
      role: 'tester',
      username: 'bmylesg',
      country: 'Poland',
      contact: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      currentPlan: 'basic',
      status: 'active',
      avatar: '',
      avatarColor: 'light-warning'
    },
    {
      id: 18,
      billing: '40000',
      fullName: 'Bertha Biner',
      company: 'Twinte PVT LTD',
      role: 'editor',
      username: 'bbinerh',
      country: 'Yemen',
      contact: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      currentPlan: 'team',
      status: 'active',
      avatar: avatar7
    },
    {
      id: 19,
      billing: '40000',
      fullName: 'Travus Bruntjen',
      company: 'Cogidoo PVT LTD',
      role: 'manger',
      username: 'tbruntjeni',
      country: 'France',
      contact: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '',
      avatarColor: 'light-info'
    },
    {
      id: 20,
      billing: '10000',
      fullName: 'Wesley Burland',
      company: 'Bubblemix PVT LTD',
      role: 'editor',
      username: 'wburlandj',
      country: 'Honduras',
      contact: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      currentPlan: 'team',
      status: 'inactive',
      avatar: avatar6
    },
    {
      id: 21,
      billing: '10000',
      fullName: 'Selina Kyle',
      company: 'Wayne Enterprises',
      role: 'manger',
      username: 'catwomen1940',
      country: 'USA',
      contact: '(829) 537-0057',
      email: 'irena.dubrovna@wayne.com',
      currentPlan: 'team',
      status: 'active',
      avatar: avatar1
    },
    {
      id: 22,
      billing: '10000',
      fullName: 'Jameson Lyster',
      company: 'Quaxo PVT LTD',
      role: 'editor',
      username: 'jlysterl',
      country: 'Ukraine',
      contact: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      currentPlan: 'company',
      status: 'inactive',
      avatar: avatar8
    },
    {
      id: 23,
      billing: '20000',
      fullName: 'Kare Skitterel',
      company: 'Ainyx PVT LTD',
      role: 'tester',
      username: 'kskitterelm',
      country: 'Poland',
      contact: '(254) 845-4107',
      email: 'kskitterelm@washingtonpost.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: avatar3
    },
    {
      id: 24,
      billing: '20000',
      fullName: 'Cleavland Hatherleigh',
      company: 'Flipopia PVT LTD',
      role: 'manger',
      username: 'chatherleighn',
      country: 'Brazil',
      contact: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      currentPlan: 'team',
      status: 'pending',
      avatar: avatar2
    },
    {
      id: 25,
      billing: '30000',
      fullName: 'Adeline Micco',
      company: 'Topicware PVT LTD',
      role: 'manger',
      username: 'amiccoo',
      country: 'France',
      contact: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-primary'
    },
    {
      id: 26,
      billing: '40000',
      fullName: 'Hugh Hasson',
      company: 'Skinix PVT LTD',
      role: 'admin',
      username: 'hhassonp',
      country: 'China',
      contact: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: avatar4
    },
    {
      id: 27,
      billing: '40000',
      fullName: 'Germain Jacombs',
      company: 'Youopia PVT LTD',
      role: 'editor',
      username: 'gjacombsq',
      country: 'Zambia',
      contact: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: avatar10
    },
    {
      id: 28,
      billing: '30000',
      fullName: 'Bree Kilday',
      company: 'Jetpulse PVT LTD',
      role: 'tester',
      username: 'bkildayr',
      country: 'Portugal',
      contact: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'light-success'
    },
    {
      id: 29,
      billing: '10000',
      fullName: 'Candice Pinyon',
      company: 'Kare PVT LTD',
      role: 'tester',
      username: 'cpinyons',
      country: 'Sweden',
      contact: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      currentPlan: 'team',
      status: 'active',
      avatar: avatar7
    },
    {
      id: 30,
      billing: '30000',
      fullName: 'Isabel Mallindine',
      company: 'Voomm PVT LTD',
      role: 'backend',
      username: 'imallindinet',
      country: 'Slovenia',
      contact: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-warning'
    },
    {
      id: 31,
      billing: '40000',
      fullName: 'Gwendolyn Meineken',
      company: 'Oyondu PVT LTD',
      role: 'manger',
      username: 'gmeinekenu',
      country: 'Moldova',
      contact: '(551) 379-7460',
      email: 'gmeinekenu@hc360.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: avatar1
    },
    {
      id: 32,
      billing: '20000',
      fullName: 'Rafaellle Snowball',
      company: 'Fivespan PVT LTD',
      role: 'editor',
      username: 'rsnowballv',
      country: 'Philippines',
      contact: '(974) 829-0911',
      email: 'rsnowballv@indiegogo.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: avatar5
    },
    {
      id: 33,
      billing: '10000',
      fullName: 'Rochette Emer',
      company: 'Thoughtworks PVT LTD',
      role: 'manger',
      username: 'remerw',
      country: 'North Korea',
      contact: '(841) 889-3339',
      email: 'remerw@blogtalkradio.com',
      currentPlan: 'basic',
      status: 'active',
      avatar: avatar8
    },
    {
      id: 34,
      billing: '40000',
      fullName: 'Ophelie Fibbens',
      company: 'Jaxbean PVT LTD',
      role: 'backend',
      username: 'ofibbensx',
      country: 'Indonesia',
      contact: '(764) 885-7351',
      email: 'ofibbensx@booking.com',
      currentPlan: 'company',
      status: 'active',
      avatar: avatar4
    },
    {
      id: 35,
      billing: '20000',
      fullName: 'Stephen MacGilfoyle',
      company: 'Browseblab PVT LTD',
      role: 'tester',
      username: 'smacgilfoyley',
      country: 'Japan',
      contact: '(350) 589-8520',
      email: 'smacgilfoyley@bigcartel.com',
      currentPlan: 'company',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-danger'
    },
    {
      id: 36,
      billing: '20000',
      fullName: 'Bradan Rosebotham',
      company: 'Agivu PVT LTD',
      role: 'backend',
      username: 'brosebothamz',
      country: 'Belarus',
      contact: '(882) 933-2180',
      email: 'brosebothamz@tripadvisor.com',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'light-info'
    },
    {
      id: 37,
      billing: '40000',
      fullName: 'Skip Hebblethwaite',
      company: 'Katz PVT LTD',
      role: 'manger',
      username: 'shebblethwaite10',
      country: 'Canada',
      contact: '(610) 343-1024',
      email: 'shebblethwaite10@arizona.edu',
      currentPlan: 'company',
      status: 'inactive',
      avatar: avatar9
    },
    {
      id: 38,
      billing: '30000',
      fullName: 'Moritz Piccard',
      company: 'Twitternation PVT LTD',
      role: 'tester',
      username: 'mpiccard11',
      country: 'Croatia',
      contact: '(365) 277-2986',
      email: 'mpiccard11@vimeo.com',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: avatar1
    },
    {
      id: 39,
      billing: '40000',
      fullName: 'Tyne Widmore',
      company: 'Yombu PVT LTD',
      role: 'backend',
      username: 'twidmore12',
      country: 'Finland',
      contact: '(531) 731-0928',
      email: 'twidmore12@bravesites.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-primary'
    },
    {
      id: 40,
      billing: '40000',
      fullName: 'Florenza Desporte',
      company: 'Kamba PVT LTD',
      role: 'Frontend',
      username: 'fdesporte13',
      country: 'Ukraine',
      contact: '(312) 104-2638',
      email: 'fdesporte13@omniture.com',
      currentPlan: 'company',
      status: 'active',
      avatar: avatar6
    },
    {
      id: 41,
      billing: '30000',
      fullName: 'Edwina Baldetti',
      company: 'Dazzlesphere PVT LTD',
      role: 'tester',
      username: 'ebaldetti14',
      country: 'Haiti',
      contact: '(315) 329-3578',
      email: 'ebaldetti14@theguardian.com',
      currentPlan: 'team',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-success'
    },
    {
      id: 42,
      billing: '40000',
      fullName: 'Benedetto Rossiter',
      company: 'Mybuzz PVT LTD',
      role: 'editor',
      username: 'brossiter15',
      country: 'Indonesia',
      contact: '(323) 175-6741',
      email: 'brossiter15@craigslist.org',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'light-danger'
    },
    {
      id: 43,
      billing: '30000',
      fullName: 'Micaela McNirlan',
      company: 'Tambee PVT LTD',
      role: 'manger',
      username: 'mmcnirlan16',
      country: 'Indonesia',
      contact: '(242) 952-0916',
      email: 'mmcnirlan16@hc360.com',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '',
      avatarColor: 'light-warning'
    },
    {
      id: 44,
      billing: '20000',
      fullName: 'Vladamir Koschek',
      company: 'Centimia PVT LTD',
      role: 'frontend',
      username: 'vkoschek17',
      country: 'Guatemala',
      contact: '(531) 758-8335',
      email: 'vkoschek17@abc.net.au',
      currentPlan: 'team',
      status: 'active',
      avatar: '',
      avatarColor: 'light-info'
    },
    {
      id: 45,
      billing: '20000',
      fullName: 'Corrie Perot',
      company: 'Flipopia PVT LTD',
      role: 'backend',
      username: 'cperot18',
      country: 'China',
      contact: '(659) 385-6808',
      email: 'cperot18@goo.ne.jp',
      currentPlan: 'team',
      status: 'pending',
      avatar: avatar3
    },
    {
      id: 46,
      billing: '10000',
      fullName: 'Saunder Offner',
      company: 'Skalith PVT LTD',
      role: 'tester',
      username: 'soffner19',
      country: 'Poland',
      contact: '(200) 586-2264',
      email: 'soffner19@mac.com',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-primary'
    },
    {
      id: 47,
      billing: '20000',
      fullName: 'Karena Courtliff',
      company: 'Feedfire PVT LTD',
      role: 'manger',
      username: 'kcourtliff1a',
      country: 'China',
      contact: '(478) 199-0020',
      email: 'kcourtliff1a@bbc.co.uk',
      currentPlan: 'basic',
      status: 'active',
      avatar: avatar1
    },
    {
      id: 48,
      billing: '20000',
      fullName: 'Onfre Wind',
      company: 'Thoughtmix PVT LTD',
      role: 'manger',
      username: 'owind1b',
      country: 'Ukraine',
      contact: '(344) 262-7270',
      email: 'owind1b@yandex.ru',
      currentPlan: 'basic',
      status: 'pending',
      avatar: '',
      avatarColor: 'light-success'
    },
    {
      id: 49,
      billing: '40000',
      fullName: 'Paulie Durber',
      company: 'Babbleblab PVT LTD',
      role: 'backend',
      username: 'pdurber1c',
      country: 'Sweden',
      contact: '(694) 676-1275',
      email: 'pdurber1c@gov.uk',
      currentPlan: 'team',
      status: 'inactive',
      avatar: '',
      avatarColor: 'light-danger'
    },
    {
      id: 50,
      billing: '10000',
      fullName: 'Beverlie Krabbe',
      company: 'Kaymbo PVT LTD',
      role: 'editor',
      username: 'bkrabbe1d',
      country: 'China',
      contact: '(397) 294-5153',
      email: 'bkrabbe1d@home.pl',
      currentPlan: 'company',
      status: 'active',
      avatar: avatar9
    }
  ]
}

// GET ALL DATA
mock.onGet('/api/users/list/all-data').reply(200, data.users)

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data)
  const highestValue = data.users.reduce((a, b) => (a.id > b.id ? a : b)).id

  user.id = highestValue + 1

  data.users.push(user)

  return [201, { user }]
})

// GET Updated DATA
mock.onGet('/api/users/list/data').reply(config => {
  const {
    q = '',
    page = 1,
    role = null,
    perPage = 10,
    sort = 'asc',
    status = null,
    currentPlan = null,
    sortColumn = 'fullName'
  } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()

  const dataAsc = data.users.sort((a, b) => (a[sortColumn] < b[sortColumn] ? -1 : 1))

  const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()

  const filteredData = dataToFilter.filter(
    user =>
      (user.email.toLowerCase().includes(queryLowered) ||
        user.fullName.toLowerCase().includes(queryLowered) ||
        user.billing.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      total: filteredData.length,
      users: paginateArray(filteredData, perPage, page)
    }
  ]
})

// GET USER
mock.onGet('/api/users/user').reply(config => {
  const { id } = config
  const user = data.users.find(i => i.id === id)
  return [200, { user }]
})

// DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  let userId = config.id

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
