# A program to find middle element of linked list in one pass.
# In order to find middle element of a linked list
# we need to find the length first but since we can only
# traverse linked list one time, we will have to use two pointers
# one which we will increment on each iteration while
# other which will be incremented every second iteration.
# So when the first pointer will point to the end of a
# linked list, second will be pointing to the middle
# element of a linked list


class Element(object):
    def __init__(self, value) -> None:
        self.value = value
        self.next = None


class LinkedList(object):
    def __init__(self, head) -> None:
        self.head = head

    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element

    def findMidElement(self):
        length = 0
        current = self.head
        middle = self.head
        while current.next is not None:
            length += 1
            if length % 2 == 0:
                middle = middle.next
            current = current.next

        print('length : ', length + 1)
        return middle.value


e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)
e5 = Element(5)

ll = LinkedList(e1)
print(ll.findMidElement())
ll.append(e2)
print(ll.findMidElement())
ll.append(e3)
print(ll.findMidElement())
ll.append(e4)
print(ll.findMidElement())
ll.append(e5)

print(ll.findMidElement())
