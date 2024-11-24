import React from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield} from 'react-icons/bs';
import { IoMdVideocam } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from 'react-icons/md';

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const channelGrid = [
    { type: 'checkbox', width: '50' },

    { field: 'Title',
      headerText: 'Title',
      width: '200',
      textAlign: 'Center' },

    { field: 'ChannelName',
      headerText: 'Channel',
      width: '130',
      textAlign: 'Center' },

    { field: 'UploadDate',
      headerText: 'Upload Date',
      width: '130',
      textAlign: 'Center' },

    { field: 'Likes',
      headerText: 'Likes',
      width: '120',
      textAlign: 'Center',
    },

    { field: 'Views',
      headerText: 'Views',
      width: '120',
      textAlign: 'Center' },

    { field: 'WatchTime',
      headerText: 'Watch Time',
      width: '100',
      textAlign: 'Center' },

];

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Report',
        icon: <BsFileBarGraph />,
      },
    ],
  },

  {
    title: 'Library',
    links: [
      {
        name: 'Your_Videos',
        icon: <FaYoutube />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'Analytics',
        icon: <AiOutlineStock />,
      },
    ],
  },
];

export const getInfo = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '31,323,456',
    percentage: '- 4507',
    title: 'Subscribed',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <IoMdVideocam />,
    amount: '4,396',
    percentage: '',
    title: 'Videos',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <AiOutlineLike />,
    amount: '423,396',
    percentage: '+38%',
    title: 'Likes',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <IoTime />,
    amount: '28009 Hrs',
    percentage: '-12%',
    title: 'Watch Time',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$35',
    title: 'SuperChat',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$200',
    desc: 'Premium',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'Accounts',
    desc: 'Switch Account',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const channelsData = [
  {
    ChannelID: 1001,
    Title : 'Podcast- MARCOS Commando',
    ChannelName: 'Raj Shamani',
    UploadDate: '17/04/2023',
    Likes: '20.3 lakhs',
    Views: '60.9 lakhs',
    WatchTime : '12345 hrs',
  },
  {
    ChannelID: 1002,
    Title : 'Deadliest Special Forces',
    ChannelName: 'Clips by Raj Shamani',
    UploadDate: '06/04/2024',
    Likes: '9 lakhs',
    Views: '15.7 lakhs',
    WatchTime : '7568 hrs',
  },
  {
    ChannelID: 1003,
    Title : 'Bussiness in aviation secetor',
    ChannelName: 'Raj Shamani',
    UploadDate: '17/04/2023',
    Likes: '3.4 lakhs',
    Views: '6 lakhs',
    WatchTime : '12345 hrs',
  },
];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2024',
  },
  {
    Id: '2',
    Time: 'April 2024',
  }, {
    Id: '3',
    Time: 'May 2024',
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Views',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Likes',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Watch Hours',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];
