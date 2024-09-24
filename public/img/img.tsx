

const fileInput = document.getElementById("fileInput") as HTMLInputElement;
const imagePreview = document.getElementById("imagePreview") as HTMLImageElement;

// 初期状態でデフォルト画像を設定
const defaultImage = "/icon/noimage.jpg"; // デフォルト画像のURL
imagePreview.src = defaultImage;

// ファイルが選択されたときに画像を更新
fileInput.addEventListener('change', (event: Event) => {
	const target = event.target as HTMLInputElement;
	if (target.files && target.files[0]) {
		const selectedFile = target.files[0];

		// FileReaderを使用して選択された画像をプレビュー
		const reader = new FileReader();
		reader.onload = (e) => {
			imagePreview.src = e.target?.result as string; // 画像プレビューを更新
		};
		reader.readAsDataURL(selectedFile); // ファイルをデータURLとして読み込む
	}
});
