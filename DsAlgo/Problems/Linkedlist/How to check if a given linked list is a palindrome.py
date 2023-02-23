# Given a linked list and a value x, partition it such that 
# all nodes less than x come before nodes greater than or 
# equal to x.


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None

class LinkedList(object):
    def __init__(self, value) -> None:
        self.head = value

    def append(self, new_value):
        if self.head:
            current = self.head
            while  current.next:
                current = current.next
            current.next = new_value
        else:
            self.head = new_value
    
    def isPalindrome(self):
        if not self.head or not self.head.next:
            return True
        
        # Find the middle element using slow and fast pointers
        slow = fast = self.head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        # Reverse the second half of the linked list
        prev = None
        curr = slow
        while curr:
            curr.next= prev 
            prev = curr
            curr = curr.next
        
        # Traverse both halves of the linked list in parallel, comparing each element
        p1 = self.head
        p2 = prev
        while p2:
            if p1.val != p2.val:
                # If the values of the elements don't match, it's not a palindrome
                return False
            p1 = p1.next,
            p2 = p2.next
        
        # Restore the second half of the linked list to its original order
        curr = prev
        prev = None
        while curr:
            curr.next = prev
            prev = curr
            curr =  curr.next
        
        # If all elements were compared successfully, it's a palindrome
        return True

e1 = Element(1)
e2 = Element(3)
e3 = Element(5)
e4 = Element(7)
e5 = Element(5)
e6 = Element(3)
e7 = Element(1)

ll = LinkedList(e1)
ll.append(e2)
ll.append(e3)
ll.append(e4)
ll.append(e5)
ll.append(e6)
ll.append(e7)

print(ll.isPalindrome())