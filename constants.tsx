
import { TravelPlan } from './types';

export const INITIAL_PLAN: TravelPlan = {
  days: [
    {
      title: "第一天：宏村核心意境游",
      morning: [
        {
          id: '1',
          name: '南湖 (Nanhu Lake)',
          description: '宏村的“门面”，仿西湖平湖秋月。清晨的南湖烟雨蒙蒙，是拍摄宏村全景的最佳地点。',
          time: '07:30 - 09:00',
          image: 'https://images.unsplash.com/photo-1599591037482-6f2964956108?q=80&w=800&auto=format&fit=crop'
        },
        {
          id: '2',
          name: '南湖书院',
          description: '典型的徽派古书院，曾是村中子弟读书的地方，建筑精美，充满书卷气。',
          time: '09:00 - 10:00',
          image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop'
        }
      ],
      afternoon: [
        {
          id: '4',
          name: '月沼 (Moon Pond)',
          description: '宏村的心脏。半月形的湖水映衬着四周的白墙黛瓦，是电影《卧虎藏龙》的取景地。',
          time: '13:30 - 15:00',
          image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=800&auto=format&fit=crop'
        },
        {
          id: '5',
          name: '承志堂',
          description: '被称为“民间故宫”，其木雕艺术登峰造极，是宏村最具代表性的宅院。',
          time: '15:00 - 16:30',
          image: 'https://images.unsplash.com/photo-1449495940464-370af3320b2d?q=80&w=800&auto=format&fit=crop'
        }
      ],
      evening: [
        {
          id: '7',
          name: '月沼夜色',
          description: '华灯初上，灯笼亮起，在月沼边静静坐一会，感受不同于白天的宁静。',
          time: '19:00 - 20:30',
          image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop'
        }
      ]
    },
    {
      title: "第二天：周边诗画秘境",
      morning: [
        {
          id: '8',
          name: '塔川秋色',
          description: '距离宏村仅2公里，中国四大秋色之一。即便非秋季，田园风光亦如诗如画。',
          time: '08:00 - 10:30',
          image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop'
        }
      ],
      afternoon: [
        {
          id: '9',
          name: '木坑竹海',
          description: '万亩竹林，空气极其清新。在这里体验《卧虎藏龙》里的竹林风韵。',
          time: '13:30 - 16:00',
          image: 'https://images.unsplash.com/photo-1528181304800-2f140819ad52?q=80&w=800&auto=format&fit=crop'
        }
      ],
      evening: []
    }
  ],
  foods: [
    {
      name: '臭鳜鱼',
      description: '徽菜头牌，闻着臭吃着香，肉质鲜嫩，呈蒜瓣状。',
      recommendation: '居善堂、得月楼'
    },
    {
      name: '毛豆腐',
      description: '上好的豆腐发酵长毛后油煎，外酥里嫩，配上特制辣椒酱。',
      recommendation: '小吃摊位均有售'
    },
    {
      name: '五更笋',
      description: '爽口的当地特产笋干，吸满了肉汤的鲜美。',
      recommendation: '当地农家乐'
    }
  ],
  accommodations: [
    {
      name: '宏村古宅民宿',
      type: '历史古建筑',
      features: ['百年历史', '木雕装饰', '天井结构']
    },
    {
      name: '南湖岸边精品酒店',
      type: '景观房',
      features: ['一线湖景', '现代设施', '推窗即景']
    }
  ]
};
