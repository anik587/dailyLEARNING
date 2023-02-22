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
    
    def isPalindrome(self, element = None):
        if element:
            current = element
        else:  
            current = self.head
        rev_current = self.head
        check = True
        while current.next:
            if check:
                self.isPalindrome(current.next)
        if rev_current.value != current.value:
            check = False
        rev_current = rev_current.next
        return current.value


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

ll.isPalindrome()