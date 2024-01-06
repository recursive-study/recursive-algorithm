function solution(m, n, board) {

    board = board.map(v => v.split(''));
    
    while(true) {
        let founded = []
        
        for(let i=1;i<m;i++) {
            for(let j=1;j<n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    founded.push([i,j])
                }
            }
        }
        
        // 더 이상 지워질 블록이 없는 경우 빈 블록 개수 리턴
        if(!founded.length) return [].concat(...board).filter(v=>!v).length  
        
        // 블록 0으로 만들기
        founded.forEach(([i,j])=> {
            board[i][j] = 0
            board[i][j-1] = 0
            board[i-1][j-1] = 0
            board[i-1][j] = 0
        })
        
        // 0을 제외하고 정렬
        for(let i=m-1;i>0;i--) {
            
            // 모든 요소가 블록인 경우(0이 아닌 경우) 넘어감
            if(!board[i].some(v=>!v)) continue;
            
            for(let j=0;j<n;j++) {
                for(let k=i-1;k>=0 && !board[i][j]; k--){
                    if(board[k][j]) {
                        board[i][j] = board[k][j] // 위의 블록을 아래에 할당
                        board[k][j] =0; // 위의 블록 0으로 변환
                        break
                    }
                }
            }
        }
    }
}