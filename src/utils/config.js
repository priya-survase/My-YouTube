const YOUR_API_KEY = "AIzaSyA84TGAyc-phUjWTbE1Qvmtmh0Cw9hBuBA";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUR_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const GET_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  YOUR_API_KEY +
  "&id=";

export const GET_CHANNEL = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key="+YOUR_API_KEY+"&id=";

export const DUMMY = 
{
  "kind": "youtube#videoListResponse",
  "etag": "Kuq4L3UPhReHNuDVebYiJZqNOfc",
  "items": [
      {
          "kind": "youtube#video",
          "etag": "zMMviOX173BbINjSJQP4qhZYIyE",
          "id": "B7smsbrZhUY",
          "snippet": {
              "publishedAt": "2023-05-25T13:45:03Z",
              "channelId": "UC8ZRiu_mBJwuMHcdIpKjTfA",
              "title": "Ammi’s Home Tour🏠 | Ammi aur meri na khatam hone wali jung 🙈| Surprise by the bachcha party ❤️",
              "description": "My instagram:- https://instagram.com/shoaib2087?igshid=ji3wjs56r2jc\n\nMy twitter:- https://twitter.com/shoaib_ibrahim1?s=21\n\nMusic: Humsafar\nMusician: ASHUTOSH",
              "thumbnails": {
                  "default": {
                      "url": "https://i.ytimg.com/vi/B7smsbrZhUY/default.jpg",
                      "width": 120,
                      "height": 90
                  },
                  "medium": {
                      "url": "https://i.ytimg.com/vi/B7smsbrZhUY/mqdefault.jpg",
                      "width": 320,
                      "height": 180
                  },
                  "high": {
                      "url": "https://i.ytimg.com/vi/B7smsbrZhUY/hqdefault.jpg",
                      "width": 480,
                      "height": 360
                  },
                  "standard": {
                      "url": "https://i.ytimg.com/vi/B7smsbrZhUY/sddefault.jpg",
                      "width": 640,
                      "height": 480
                  },
                  "maxres": {
                      "url": "https://i.ytimg.com/vi/B7smsbrZhUY/maxresdefault.jpg",
                      "width": 1280,
                      "height": 720
                  }
              },
              "channelTitle": "Shoaib Ibrahim Official",
              "tags": [
                  "shoaib ibrahim",
                  "dipika kakar",
                  "dipika kakar ibrahim",
                  "ramadan",
                  "ibrahim family",
                  "shoaib ibrahim official",
                  "latest vlog",
                  "shoaib ibrahim vlogs",
                  "sehri vlog",
                  "iftar vlog",
                  "family",
                  "family fun",
                  "sasural simar ka",
                  "simar",
                  "ssk2",
                  "yaar dua",
                  "shoaika",
                  "shoaika wedding",
                  "shoika proposal",
                  "daily vlog",
                  "saba ibrahim",
                  "dipika pregnant",
                  "Ramadan mubarak",
                  "Ramadan 2023"
              ],
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                  "title": "Ammi’s Home Tour🏠 | Ammi aur meri na khatam hone wali jung 🙈| Surprise by the bachcha party ❤️",
                  "description": "My instagram:- https://instagram.com/shoaib2087?igshid=ji3wjs56r2jc\n\nMy twitter:- https://twitter.com/shoaib_ibrahim1?s=21\n\nMusic: Humsafar\nMusician: ASHUTOSH"
              }
          },
          "contentDetails": {
              "duration": "PT18M41S",
              "dimension": "2d",
              "definition": "hd",
              "caption": "false",
              "licensedContent": true,
              "contentRating": {},
              "projection": "rectangular"
          },
          "statistics": {
              "viewCount": "1878083",
              "likeCount": "92262",
              "favoriteCount": "0",
              "commentCount": "3018"
          }
      }
  ],
  "pageInfo": {
      "totalResults": 1,
      "resultsPerPage": 1
  }
}