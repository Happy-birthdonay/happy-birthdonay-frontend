export const copyClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    window.alert('클립보드에 링크가 복사되었어요.');
  } catch (err) {
    console.log(err);
  }
};
