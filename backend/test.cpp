
// struct TreeNode {
//     int val;
//     TreeNode* left;
//     TreeNode* right;
//     TreeNode(int x) : val(x), left(nullptr), right(nullptr){}
// };

// TreeNode* constructBST(vector<int>& inorder, int start, int end) {
//     if (start > end) {
//         return nullptr;
//     }
    
//     int mid = (start + end) / 2;
//     TreeNode* root = new TreeNode(inorder[mid]);
    
//     root->left = constructBST(inorder, start, mid - 1);
//     root->right = constructBST(inorder, mid + 1, end);
    
//     return root;
// }

// TreeNode* constructBalancedBST(vector<int>& inorder) {
//     return constructBST(inorder, 0, inorder.size() - 1);
// }

// void levelOrderTraversal(TreeNode* root) {
//     if (root == nullptr) {
//         return;
//     }
    
//     queue<TreeNode*> q;
//     q.push(root);
    
//     while (!q.empty()) {
//         TreeNode* node = q.front();
//         q.pop();
        
//         cout << node->val << " ";
        
//         if (node->left) {
//             q.push(node->left);
//         }
        
//         if (node->right) {
//             q.push(node->right);
//         }
//     }
// }

// int main() {
//     int n;
//     cin >> n;
    
//     vector<int> inorder(n);
//     for (int i = 0; i < n; i++) {
//         cin >> inorder[i];
//     }
    
//     TreeNode* root = constructBalancedBST(inorder);
//     levelOrderTraversal(root);
    
//     return 0;
// }


struct Node
{
    bool data;   // NOTE data is bool
    Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
    
}; 

void append(struct Node** head_ref, struct Node **tail_ref, bool new_data)
{

    struct Node* new_node = new Node(new_data);
    
    if (*head_ref == NULL)
       *head_ref = new_node;
    else
       (*tail_ref)->next = new_node;
    *tail_ref = new_node;
}
