<?php
$items = [1, 2, 3];
$isLiked = false;
$likes = 0;

function handleLikeClick() {
  global $isLiked, $likes;
  $isLiked = !$likes;
  $likes = $likes ? $likes - 1 : $likes + 1;
}

$isBooks = false;
$books = 0;

function handleBookClick() {
  global $isBooks, $books;
  $isBooks = !$books;
  $books = $books ? $books - 1 : $books + 1;
}

function handleGetLikesCount($tweetId) {
  // ここにいいね数を取得する処理を追加
}

?>

<div>
  <h1>タイムライン</h1>
  <?php foreach ($items as $item) { ?>
    <div class="container">
      <div>
        <div class="profile">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
          <p>@koshiki</p>
        </div>
        <hr class="horizontalLine" />
        <img src="Timeline/rei1.jpg" class="img" alt="post-image"></img>
        <hr class="horizontalLine" />
      </div>
      <div class="icons">
        <span class="heart <?php echo $likes ? 'red-heart' : ''; ?> leftIcon" onclick="handleLikeClick()">
          <?php if ($likes) { ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="likedIcon red_heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          <?php } else { ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="likeIcon heart" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          <?php } ?>
        </span>
        <span class="book <?php echo $books ? 'black-book' : ''; ?> rightIcon" onclick="handleBookClick()">
          <?php if ($books) { ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bookedIcon black_book" viewBox="0 0 16 16">
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
          <?php } else { ?>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bookIcon book" viewBox="0 0 16 16">
              <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>
          <?php } ?>
        </span>
      </div>
      <div>
        <hr class="horizontalLine" />
      </div>
    </div>
  <?php } ?>
</div>
