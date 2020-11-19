export const STORE_VIDEOS = "STORE_VIDEOS";

export const storeVideos = data => {
  return {
    action: STORE_VIDEOS,
    payload: data
  }
}
