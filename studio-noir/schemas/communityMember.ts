export default {
  name: 'communityMember',
  title: 'Community Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'badge',
      title: 'Badge',
      type: 'string',
      options: {
        list: [
          {title: 'Veteran', value: 'veteran'},
          {title: 'Streamer', value: 'streamer'},
          {title: 'Collector', value: 'collector'},
          {title: 'Pro Player', value: 'pro'},
          {title: 'Content Creator', value: 'creator'},
          {title: 'Moderator', value: 'moderator'},
          {title: 'VIP', value: 'vip'},
        ]
      }
    },
    {
      name: 'joinedAt',
      title: 'Joined At',
      type: 'datetime'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'badge',
      media: 'avatar',
    },
  },
}